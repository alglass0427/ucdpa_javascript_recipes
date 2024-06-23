
    ```mermaid
    graph LR
    A[Initialization]
    A1[Attach shadow DOM]
    A2[Initialize isOpen to false]
    A3[Set inner HTML with styles and modal structure]
    A4[Add event listeners to slots and buttons]
    A --> A1
    A --> A2
    A --> A3
    A --> A4

    B[Attributes Management]
    B1[attributeChangedCallback]
    B2[observedAttributes]
    B --> B1
    B --> B2
    B1 --> |'opened' attribute changes| C[Update isOpen]

    C1[Modal Control Methods]
    C1a[open()]
    C1b[hide()]
    C --> C1
    C1 --> C1a
    C1 --> C1b
    C1a --> |Set 'opened' attribute| D[Change isOpen to true]
    C1b --> |Remove 'opened' attribute if present| E[Change isOpen to false]

    F[Event Handlers]
    F1[_cancel()]
    F2[_confirm()]
    F --> F1
    F --> F2
    F1 --> |Hide modal| E
    F1 --> |Dispatch 'cancel' event| G[Bubble 'cancel' event]
    F2 --> |Hide modal| E
    F2 --> |Dispatch 'confirm' event| H[Dispatch 'confirm' event]

    subgraph Modal Lifecycle
      A
      B
      C
      F
    end
    ```