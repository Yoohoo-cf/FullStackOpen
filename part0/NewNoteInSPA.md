```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server
    participant API as DOM-API
    participant code as JavaScript Code
    

    user->>browser: Submit form
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>API: Creates new notes in memory
    API->>code: Send response to Javascript Code
    code-->>browser: HTTP 201 Created
    browser-->>user: Display the new note
 ```
