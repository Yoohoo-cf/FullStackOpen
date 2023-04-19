```mermaid
sequenceDiagram
    participant browser
    participant SPA server
    participant API server
    
    browser->>SPA server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    SPA server->>API server: Send API request for data
    API server-->>SPA server: Return data
    SPA server-->>browser: Return initial HTML, CSS, JS
```
