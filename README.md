# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

## Design and Structure

### Structure

- I look to structure my code in a clean and concise way that organizes the folder and file structure to contain all relevant information in the same place. Files including components, pages, or services, include tests, hooks, and type definitions in the same directory. Other common directories such as constants are exported to be used throughout the app. I also look to structure each file in the same manner: Default imports first, Named imports follows in alphabetical order. Each component/page is assigned a set displayName to improve debugging and readability in React Dev Tools, and are in attempt, purposed to be as presentational as possible, breaking out the necessary logic to other files.
- I have chosen to use TypeScript for type safety to enhance code quality, TailwindCss which I enjoy styling with directly in the className prop of JSX elements as an alternative to import components from a UI library, and Axios due to its ease of use in handling data and promises.

### Given More Time

- I would continue writting tests to increase meaningful coverage throughout the app, such as testing user interaction to ensure the favorite states render the proper icon. I would also enhance the user experience by adding a loading state to the button on the home page, which I would mock the time it took to fetch the data, disable the button while the fetch is being made and have a loading spinner denote to the user the request is being made. I would include a search functionality that allows the user to filter results by what they input specifically, and I would also look to add lazy loading for the Property Listings page.

### Conclusion

- One of my favorite quotes is: "When you do what you love, you never work a day in your life." I'm one of the lucky ones who actually has the chance to "work" doing what I love to do, I've enjoyed completing this challenge and hope it leads to working on more in the future!
