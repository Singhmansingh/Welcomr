// Community
const communities = [
    {
        "id": 1,
        "title": "Event 1",
        "description": "Hello!"
    }, {
        "id": 2,
        "title": "Event 2",
        "description": "Hellos!"
    }
];

// Event 
const events = [
    {
       "id":1,
       "community_id":123,
       "title":"Spring Festival",
       "price_min":0,
       "price_max":20,
       "rating":4.5,
       "date":"2023-04-30",
       "description":"Join us for a celebration of spring! Enjoy live music, food trucks, and local vendors in our community park.",
       "location":"123 Main Street",
       "time":"12:00pm - 5:00pm"
    },
    {
       "id":2,
       "community_id":456,
       "title":"Wine Tasting",
       "price_min":25,
       "price_max":50,
       "rating":4.2,
       "date":"2023-05-15",
       "description":"Experience a selection of the best local wines in our vineyard. Taste, relax and enjoy the beautiful scenery.",
       "location":"789 Vineyard Lane",
       "time":"2:00pm - 6:00pm"
    },
    {
       "id":3,
       "community_id":789,
       "title":"Charity Run",
       "price_min":10,
       "price_max":25,
       "rating":4.8,
       "date":"2023-06-05",
       "description":"Join us in our annual 5k charity run to raise funds for local non-profit organizations. The race will take place in our community park.",
       "location":"456 Oak Avenue",
       "time":"8:00am - 10:00am"
    },
    {
       "id":4,
       "community_id":234,
       "title":"Food Truck Festival",
       "price_min":0,
       "price_max":15,
       "rating":4.3,
       "date":"2023-07-01",
       "description":"Come enjoy delicious food from a variety of food trucks in our community park. There will also be live music and games for all ages.",
       "location":"567 Elm Street",
       "time":"12:00pm - 6:00pm"
    },
    {
       "id":5,
       "community_id":345,
       "title":"Summer Movie Night",
       "price_min":0,
       "price_max":0,
       "rating":4.0,
       "date":"2023-07-15",
       "description":"Bring your lawn chairs and blankets and join us for an outdoor movie night under the stars. Snacks and drinks will be available for purchase.",
       "location":"890 Oak Street",
       "time":"8:00pm - 10:00pm"
    },
    {
       "id":6,
       "community_id":567,
       "title":"Art Exhibition",
       "price_min":5,
       "price_max":10,
       "rating":4.7,
       "date":"2023-08-05",
       "description":"Come admire the works of local artists at our community art exhibition. Paintings, sculptures, and photographs will be on display.",
       "location":"234 Maple Avenue",
       "time":"10:00am - 4:00pm"
    },
    {
       "id":7,
       "community_id":890,
       "title":"Craft Fair",
       "price_min":0,
       "price_max":20,
       "rating":4.4,
       "date":"2023-08-20",
       "description":"Shop for handmade crafts and goods from local artisans at our community craft fair. There will also be food and drinks available for purchase.",
       "location":"567 Main Street",
       "time":"11:00am - 5:00pm"
    },
    {
       "id":8,
       "community_id":123,
       "title":"Halloween Party",
       "price_min":0,
       "price_max":10,
       "rating":4.1,
       "date":"2023-10-31",
       "description":"Join us for a spooky Halloween party with games, costumes, and treats for all ages. Come in costume and get a chance to win a prize!",
       "location":"234 Oak Lane",
       "time":"6:00pm - 9:00pm"
    },
    {
       "id":9,
       "community_id":456,
       "title":"Thanksgiving Potluck",
       "price_min":0,
       "price_max":0,
       "rating":4.2,
       "date":"2023-11-23",
       "description":"Celebrate Thanksgiving with your community at our potluck. Bring a dish to share and enjoy a feast with your neighbors.",
       "location":"789 Maple Street",
       "time":"12:00pm - 3:00pm"
    },
    {
       "id":10,
       "community_id":456,
       "title":"Summer BBQ Cookout",
       "price_min":0,
       "price_max":15,
       "rating":4.6,
       "date":"2024-07-20",
       "description":"Join us for a fun-filled day of grilling, games, and good company at our community BBQ cookout. Bring your favorite dish to share and your appetite!",
       "location":"789 Park Avenue",
       "time":"12:00pm - 4:00pm"
    },
    {
       "id":11,
       "community_id":234,
       "title":"Holiday Bazaar",
       "price_min":0,
       "price_max":25,
       "rating":4.5,
       "date":"2023-12-10",
       "description":"Shop for unique gifts and holiday decorations from local vendors at our community bazaar. There will also be food and drinks available for purchase.",
       "location":"567 Elm Street",
       "time":"10:00am - 4:00pm"
    },
    {
       "id":12,
       "community_id":345,
       "title":"New Year's Eve Party",
       "price_min":10,
       "price_max":20,
       "rating":4.0,
       "date":"2023-12-31",
       "description":"Ring in the New Year with your community at our festive party. There will be music, dancing, and a champagne toast at midnight.",
       "location":"890 Oak Street",
       "time":"9:00pm - 1:00am"
    },
    {
       "id":13,
       "community_id":567,
       "title":"Winter Wonderland Festival",
       "price_min":0,
       "price_max":15,
       "rating":4.2,
       "date":"2024-01-15",
       "description":"Celebrate winter with games, activities, and winter-themed treats at our community festival. Dress warmly and bring your family and friends.",
       "location":"234 Maple Avenue",
       "time":"11:00am - 3:00pm"
    },
    {
       "id":14,
       "community_id":890,
       "title":"Valentine's Day Dinner",
       "price_min":25,
       "price_max":50,
       "rating":4.8,
       "date":"2024-02-14",
       "description":"Treat your special someone to a romantic dinner at our community Valentine's Day event. There will be live music and a photo booth to capture the memories.",
       "location":"567 Main Street",
       "time":"7:00pm - 10:00pm"
    },
    {
       "id":15,
       "community_id":123,
       "title":"Easter Egg Hunt",
       "price_min":0,
       "price_max":5,
       "rating":4.4,
       "date":"2024-04-13",
       "description":"Join us for an Easter egg hunt in the park. There will be eggs filled with candy and prizes for all ages to find.",
       "location":"234 Oak Lane",
       "time":"10:00am - 12:00pm"
    }
 ];

// Accessibility
const accessbilities = [
    {
        "id": 1,
        "title": "",
        "description": "",
        "icon": ""// font awsome
    }
];

// Event_Accessibility
const events__accessbilities = [
    {
        "eventId": 1,
        "accessibility_id": 1
    }
];

// Restaurant
const restaurants = [
    {
        "id": 1,
        "community_id": 123,
        "title": "Restaurant 1",
    }
];

// Grocery
const groceries = [
    {
        "id": 1,
        "community_id": 123,
        "title": "Grocery 1",
    }
];