/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ request, view, response }) => {
  const allCookies = request.qs()

  for (let [key, value] of Object.entries(allCookies)) {
    response.plainCookie(key, value, { encode: false })
  }

  return view.render('pages/home')
})
