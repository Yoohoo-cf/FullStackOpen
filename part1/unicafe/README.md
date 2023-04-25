# unicafe(Feedback Statistics) Application

This is a simple React application that allows users to provide feedback and displays statistics based on the collected feedback. It consists of several components, including `Button`, `StatisticLine`, and `Statistics`, which are used to gather feedback and display statistics.

## Components

### Button

The `Button` component renders a button that triggers a callback function when clicked. It receives `handleClick` and `text` props, which determine the function to be executed and the text displayed on the button, respectively.

### StatisticLine

The `StatisticLine` component renders a table row that displays a text label and its corresponding value. It receives `text` and `value` props, which determine the label and value displayed in the row, respectively.

### Statistics

The `Statistics` component displays statistics based on the collected feedback. If no feedback is given, it displays a message indicating that no feedback has been provided. Otherwise, it renders a table with various statistics, such as the number of "good", "neutral", and "bad" feedback, the total number of feedback collected, the average score, and the percentage of positive feedback. These statistics are calculated based on the props received from the parent component `App`.

### App

The `App` component is the root component of the application. It manages the state for the feedback counts (i.e., "good", "neutral", and "bad") and calculates the total number of feedback collected, the average score, and the percentage of positive feedback. It renders the `Button` and `Statistics` components, passing the necessary props to them.

## Usage

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.
4. Open your web browser and go to `http://localhost:3000` to view the application.
5. Provide feedback by clicking on the buttons.
6. View the statistics displayed by the `Statistics` component based on the collected feedback.

## License

This project is licensed under the [MIT License](LICENSE), which is an open source license allowing for free use, modification, and distribution of the code.

## Contributing

If you would like to contribute to this project, feel free to open an issue or submit a pull request. Your contributions are greatly appreciated!

## Contact

If you have any questions or feedback, please feel free to contact me.