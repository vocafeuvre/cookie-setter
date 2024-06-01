/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import env from './env.js'

router.get('/', async ({ request, view, response }) => {
  const allCookies = request.qs()

  for (let [key, value] of Object.entries(allCookies)) {
    response.plainCookie(key, value, {
      encode: false,
      domain: env.get('REAL_HOST') || undefined,
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
    })
  }

  return view.render('pages/home')
})
