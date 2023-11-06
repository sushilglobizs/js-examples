Routing in Angular:

1. Generate a new component:
    ng generate component <component_name>

    This command will generate a new component (new folder, ts, css, html).
    Angular will automatically update the app.module.ts to declare(include) this component so that it can be utilized.

2. Defined a new route for the new component in app-routing.module.ts
    The syntax for a route is:
    {path: <route>, component: <component>}
