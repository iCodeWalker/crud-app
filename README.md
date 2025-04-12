# CRUD App using Next.js

    Next.js app can itself contain the data mutation code and reaches out directly to the data stores.

    We won't require a separate backend to recieve requests from the app and than stores/mutate the data as we do traditionally.

## Server Actions

    It is a react feature. But it does not work in the standard react app, which might be a pure client side react project.

    This feature can be used when using frameworks like next.js that wrap around react.

    Form action is just a function that we define in the same component or in separate file, and we pass this function to the "action" prop in form element.

    If we doesn't use the action prop, the default behaviour of the browser will be used,the default behaviour is that it defines the URL to which the data will be submited once we press the submit button.

    If we pass the function to the "action" props than on submit button click this function will be triggered.

    To make server action we have to add 'use server' directive into the function.

    Server actions only gets executed on the server.

    Once the form is submited it will behind the scenes send a request and triggers this function for us automatically.
