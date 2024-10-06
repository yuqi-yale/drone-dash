# Drone Dash - The NextGeneration EcoConscious Delivery Solution

## 🚀 Inspiration

The inspiration behind **DroneDash** came from the desire to address food deserts in urban areas, where residents have limited access to fresh produce. Recognizing the inefficiencies of conventional delivery systems and their environmental impact, we aimed to create a solution that combines urban farming with drone technology, offering quick and sustainable deliveries of fresh food.

## 📦 What It Does

**DroneDash** is a web-based platform that simulates drone delivery services for fresh produce. Key features include:
- **Order Placement**: Users can select and order fresh, locally grown food from urban farms.
- **Delivery Scheduling**: Residents can schedule deliveries at their convenience.
- **Delivery Tracking**: The app simulates the drone's delivery route in real-time.
- **Carbon Savings Calculation**: Users can see how much carbon emissions are reduced compared to traditional delivery methods. 
- **Personalized dietary recommendations** : User preference information and order history is stored with us, which allows us to give them personalized feedback on their future orders, and allow for personalised recommendations!

## 🛠️ How We Built It

For **Ordering System**, we used multiple Javascript frameworks mainly Next.js and React.js to build a deployable website for delivery application. We were also able to add a carbon footprint calculator in our code that would calculate what your 'emission score' is. We used Lightbox and Google Maps API's to integrate with our model to perform real-time route mapping. We focused on enhancing user experience and making our interface intuitive to use. 

For **Scheduling System**, the project will leverage a range of technologies, including a Reinforcement Learning-based AI model, Graph Neural Networks (GNNs), and a Vehicle Routing Problem (VRP) solver for real-time dynamic scheduling. A constraint programming approach is used to optimize routing and ensure timely deliveries. The platform's tech stack also includes UI components for real-time feedback and monitoring of drone locations during the delivery process.

## 🛑 Challenges We Ran Into

We faced several challenges during development:
- **Map Integration**: Integrate LightBox Canmap and Google Map/Mapbox Map as the backend map server. It can give us great estimation of the delivery time and also real-time locaiton of our all drones.
- **Great Website with UI friendly**: With Next.js, Tailwind.css, and Shadcn/ui, we build a fantastic website with great UI. It can lead customers to make order fast and easily.
- **Route Optimization**: Finding an efficient way to simulate drone delivery routes that consider multiple factors like distance and energy consumption.
- **Carbon Emission Calculations**: Accurately calculating the carbon savings was complex, as it required comparing multiple delivery methods and their environmental impacts.

## 🎉 Accomplishments That We're Proud Of

We are proud of several accomplishments, including:
- Successfully integrating real-time map tracking for a more interactive user experience, and using various edge cases in our code to effectively handle throttling and excess of server requests. (good code is important🤷🏻‍♀️)
- Creating a functional prototype that accurately simulates the drone delivery process and deploying it.
- Developing a user-friendly interface that allows easy ordering and delivery tracking. 
- Creating a personalised 

## 📚 What We Learned

Throughout the project, we learned:
- Technical skills in web development, particularly in integrating APIs and managing databases.
- Insights into sustainability and how technology can enhance food distribution in urban areas.
- We learned how much traction the drone delivery industry is getting with services being launched, our product will allow these companies to work with their users much more efficiently 

## 🔮 What's Next for DroneDash

For the future of **DroneDash**, we plan to:
- Connect the Ordering System and Scheduling System to achieve full functionality.
- Develop great and reliable Scheduling System structure to get best scheduling solution for our drones.
- Implement real-time drone tracking using GPS technology.
- Explore partnerships with local farms to establish a real-world pilot program.
- Use advanced ML algorithms to personalize food and delivery recommendations for individual users and build a mobile application out of it as well!
