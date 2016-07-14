const { describe, it } = require('mocha')
const { expect } = require('chai')
const sinon = require('sinon')

const React = require('react')
const { createStore } = require('redux')

const createServerApp = require('./server')

describe('createServerApp', () => {
  describe('the app definition', () => {
    it('throws an exception when routes are undefined / null', () => {
      try {
        createServerApp({ routes: undefined })
      } catch (e) {
        expect(e.message).to.eq('No routes key was found on options passed to createServerApp')
      }

      try {
        createServerApp({ routes: null })
      } catch (e) {
        expect(e.message).to.eq('No routes key was found on options passed to createServerApp')
      }
    })

    it('takes an optional renderDocument function which is called to produce the final result', (done) => {
      const routes = { path: '/', component: () => React.createElement('div', null, '') }
      const app = createServerApp({ routes, renderDocument () { return 'This is my thing' } })

      app('/').then(({ result }) => {
        expect(result).to.eq('This is my thing')
        done()
      }).catch(done)
    })

    it('takes an optional renderApp function which is called to produce the result passed to renderDocument', (done) => {
      const routes = { path: '/', component: () => React.createElement('div', null, '') }
      const app = createServerApp({
        routes,
        renderDocument (result) {
          return `WOOT! ${result}`
        },
        renderApp () {
          return 'This is my thing'
        }
      })

      app('/').then(({ result }) => {
        expect(result).to.eq('WOOT! This is my thing')
        done()
      }).catch(done)
    })

    it('takes an optional createLocals function which is called with the router params and store to produce locals for redial', () => {
      const routes = {
        path: '/',
        component: ({ children }) => children,
        indexRoute: {
          component: () => React.createElement('div')
        },
        childRoutes: [
          {
            path: '/foos/:fooId',
            component: () => React.createElement('div')
          }
        ]
      }
      const store = createStore((state) => state)
      const createLocalsSpy = sinon.spy((params) => (params))
      const app = createServerApp({
        routes,
        createLocals: createLocalsSpy
      })

      app('/foos/1').then(() => {
        expect(createLocalsSpy.getCall(0).args[0].fooId).to.eq(1)
        expect(createLocalsSpy.getCall(0).args[1]).to.eq(store)
      })
    })
  })

  it('returns a function which takes a route and returns a promise', () => {
    const routes = { path: '/', component: () => React.createElement('div', null, '') }
    const app = createServerApp({ routes })
    const subject = app('/')
    expect(subject instanceof Promise).to.be.ok
  })

  describe('the returned promise', () => {
    const IndexRouteHandler = () => (
      React.createElement('div', null, 'YARGY YARG YARG')
    )

    const BlargyRouteHandler = () => (
      React.createElement('div', null, 'BLARGY BLARG BLARG')
    )

    const routes = {
      path: '/',
      component: ({ children }) => children,
      indexRoute: {
        component: IndexRouteHandler
      },
      childRoutes: [
        { path: '/blargy', component: BlargyRouteHandler }
      ]
    }

    it('resolves to the HTML for the matching route (index)', (done) => {
      const app = createServerApp({ routes })
      app('/').then(({ result }) => {
        expect(result).to.contain('YARGY YARG YARG')
        done()
      }).catch(done)
    })

    it('resolves to the HTML for the matching route (blargy)', (done) => {
      const app = createServerApp({ routes })
      app('/blargy').then(({ result }) => {
        expect(result).to.contain('BLARGY BLARG BLARG')
        done()
      }).catch(done)
    })
  })
})
