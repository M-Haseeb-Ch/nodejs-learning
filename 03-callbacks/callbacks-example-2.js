/**
 * Demonstration of Node.js Callback Hell with separate functions.
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
 *      node callbacks-example-2.js
 */

const timeout = 500;

function carWash(callback) {
    console.log("⏳ Starting car wash...");
    setTimeout(() => {
        const success = true; // simulate success/failure
        if (!success) return callback(new Error("❌ Car wash failed"));
        return callback(null, "✅ Car wash completed.\n");
    }, timeout);
}

function refillFuel(callback) {
    console.log("⏳ Refilling fuel...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Fuel refill failed"));
        return callback(null, "✅ Fuel refilled.\n");
    }, timeout);
}

function checkEngineOil(callback) {
    console.log("⏳ Checking engine oil...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Engine oil check failed"));
        return callback(null, "✅ Engine oil is good.\n");
    }, timeout);
}

function checkCoolant(callback) {
    console.log("⏳ Checking coolant...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Coolant check failed"));
        return callback(null, "✅ Coolant level is fine.\n");
    }, timeout);
}

function checkBrakeFluid(callback) {
    console.log("⏳ Checking brake fluid...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Brake fluid check failed"));
        return callback(null, "✅ Brake fluid OK.\n");
    }, timeout);
}

function inspectBattery(callback) {
    console.log("⏳ Inspecting battery...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Battery inspection failed"));
        return callback(null, "✅ Battery inspection completed.\n");
    }, timeout);
}

function changeTyres(callback) {
    console.log("⏳ Changing tyres...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Tyre change failed"));
        return callback(null, "✅ Tyres changed.\n");
    }, timeout);
}

function startCar(callback) {
    console.log("⏳ Starting the car...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Car failed to start"));
        return callback(null, "✅ Car started.\n");
    }, timeout);
}

function testDrive(callback) {
    console.log("⏳ Taking the car for a test drive...");
    setTimeout(() => {
        const success = true;
        if (!success) return callback(new Error("❌ Test drive failed"));
        return callback(null, "✅ Test drive completed. Car is ready.\n");
    }, timeout);
}


function serviceCar() {
    console.log("🚗 A car has arrived for service.");
    console.log("🔧 Service started...\n");

    carWash((err, result) => {
        if (err) return console.error(err.message);
        console.log(result);

        refillFuel((err, result) => {
            if (err) return console.error(err.message);
            console.log(result);

            checkEngineOil((err, result) => {
                if (err) return console.error(err.message);
                console.log(result);

                checkCoolant((err, result) => {
                    if (err) return console.error(err.message);
                    console.log(result);

                    checkBrakeFluid((err, result) => {
                        if (err) return console.error(err.message);
                        console.log(result);

                        inspectBattery((err, result) => {
                            if (err) return console.error(err.message);
                            console.log(result);

                            changeTyres((err, result) => {
                                if (err) return console.error(err.message);
                                console.log(result);

                                startCar((err, result) => {
                                    if (err) return console.error(err.message);
                                    console.log(result);

                                    testDrive((err, result) => {
                                        if (err) return console.error(err.message);
                                        console.log(result);

                                        console.log("🎉 Car service completed!");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

serviceCar();