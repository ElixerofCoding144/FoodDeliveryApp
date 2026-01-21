# Food Ordering Project 

## Episode-04 | Talk is Cheap, Show Me the Code
- Built a Food Ordering App
    - AppLayout
    - Header Component with Logo, Nav Items and Cart
    - Body Component
    - RestaurantCard Component
    - Initially used static data to create Restaurant List
    - Passed props(info.name etc.) of Restaurant List to make it dynamic; Props are nothing but arguments passed to Components and Components are JavaScript functions
    - Later used destructering and spread operator to increase the readibility of the code
    - Used Array.map() function to avoid writing Restaurant Card multiple times
    - Used "key", passed in map() to ensure that the existing restaurant Card doesn't render every time a new Restaurant is added in the Restaurant List.
        - Key is used to identify the DOM elements
        - Best Practice: Use unique ID over indexes as key
    - Result: <img width="3456" height="1982" alt="image" src="https://github.com/user-attachments/assets/647bdd86-fb5e-40ab-a0b3-b63ff5e0e8f1" />



