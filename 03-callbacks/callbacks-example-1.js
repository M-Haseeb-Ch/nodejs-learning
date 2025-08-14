/**
 * Demonstration of Node.js 'Callback Hell' with direct nested functions.
 * 
 * Let’s say we have a car that needs servicing.
 * We need to perform the following tasks in order:
 *  1. Wash the car
 *  2. Refill fuel
 *  3. Check engine oil
 *  4. Check coolant
 *  5. Check brake fluid
 *  6. Inspect battery
 *  7. Change tyres
 *  8. Start the car
 *  9. Test drive the car
 *
 * Steps:
 * 1. Navigate into the project folder
 * 2. Run the script:
 *      node callbacks-example-1.js
 */

const timeout = 500;

function serviceCar() {
    console.log("🚗 A car has arrived for service.");
    console.log("🔧 Service started...\n");

    console.log("⏳ Starting car wash...");
    setTimeout(() => {
        console.log("✅ Car wash completed.\n");

        console.log("⏳ Refilling fuel...");
        setTimeout(() => {
            console.log("✅ Fuel refilled.\n");

            console.log("⏳ Checking engine oil...");
            setTimeout(() => {
                console.log("✅ Engine oil is good.\n");

                console.log("⏳ Checking coolant...");
                setTimeout(() => {
                    console.log("✅ Coolant level is fine.\n");

                    console.log("⏳ Checking brake fluid...");
                    setTimeout(() => {
                        console.log("✅ Brake fluid OK.\n");

                        console.log("⏳ Inspecting battery...");
                        setTimeout(() => {
                            console.log("✅ Battery inspection completed.\n");

                            console.log("⏳ Changing tyres...");
                            setTimeout(() => {
                                console.log("✅ Tyres changed.\n");

                                console.log("⏳ Starting the car...");
                                setTimeout(() => {
                                    console.log("✅ Car started.\n");

                                    console.log("⏳ Taking the car for a test drive...");
                                    setTimeout(() => {
                                        console.log("✅ Test drive completed. Car is ready.\n");
                                        console.log("🎉 Car service completed!");
                                    }, timeout);

                                }, timeout);

                            }, timeout);

                        }, timeout);

                    }, timeout);

                }, timeout);

            }, timeout);

        }, timeout);

    }, timeout);
}

serviceCar();