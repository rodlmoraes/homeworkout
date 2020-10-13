// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('[data-react-component]')
  const { props } = JSON.parse(element.getAttribute('data-react-component'))

  ReactDOM.render(
    <App route={props.route} />,
    document.body.appendChild(document.createElement('div')),
  )
})
