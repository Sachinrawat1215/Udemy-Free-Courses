const ApiSchema = require('../Schema/register');
const fetch = require('node-fetch');

setInterval(() => {
    try {
        const getData = async () => {
            const apiData = await fetch('https://udemy-backend-api.herokuapp.com').then((res) => res.json()).then((json) => {
                return json;
            })

            // Insert New data
            const CurrentDate = new Date();
            const finalDate = `${CurrentDate.getHours()}:${CurrentDate.getMinutes()}:${CurrentDate.getSeconds()} ${CurrentDate.toLocaleDateString()}`;
            const latestData = await new ApiSchema({ api: apiData, date: finalDate });
            latestData.save();

            // Remove old One
            const findAll = await ApiSchema.find({});
            const lastId = findAll[0]._id;
            const removeLast = await ApiSchema.findByIdAndRemove({ _id: lastId });
        }
        getData();
    } catch (error) {
        console.log("this is", error);
    }
}, 120000);


const mainPost = async (req, res) => {
    try {
        const allData = await ApiSchema.find({});
        res.status(200).json(allData[allData.length - 1]);
    } catch (error) {
        res.status(404).json("failed to run main", error);
    }
}

module.exports = {
    main: mainPost
};