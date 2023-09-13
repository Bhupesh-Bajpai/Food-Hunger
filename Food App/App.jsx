import React from "react";
import ReactDOM from "react-dom/client";

const RestraContainer = (props) => {
    const { data } = props
    return (
        <div className="restroCard">
            <div className="imgCard">
                <img className="imgLogo" src={data.info.image.url} />
                <div className="text-container">80% OFF</div>
            </div>
            <div className="restroDetails">
                <div className="restroDetailsChild1">
                    <div className="restroName">
                        {data.info.name}
                    </div>
                    <div className="restroItems">
                        {data.info.cuisine.map(cuisine => (
                            <span key={cuisine.name}>{cuisine.name+" "}</span>
                        ))}
                    </div>
                </div>
                <div className="restroDetailsChild2">
                    <div className="restroRating">
                        {data.info.rating.aggregate_rating} ⭐️
                    </div>
                    <div className="restroCost">
                        {data.info.costText.text}
                    </div>
                    <div className="restroEta">
                        {data.order.deliveryTime}
                    </div>

                </div>


            </div>

        </div>
    )
}
const BodyContainer = () => {
    const resData = [
        {
            "type": "restaurant",
            "info": {
                "resId": 19316327,
                "name": "NIC Ice Creams",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/19316300\/3a39ab50914d3b68b19319919a55cfc7_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/19316300\/3a39ab50914d3b68b19319919a55cfc7_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.5",
                    "rating_text": "4.5",
                    "rating_subtitle": "Excellent",
                    "rating_color": "3F7E00",
                    "votes": "2,452",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.5",
                            "reviewCount": "2,452",
                            "reviewTextSmall": "2,452 Reviews",
                            "subtext": "2,452 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.5",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "800"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9200 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Frazer Town, Bangalore",
                    "address": "6-3, Robertson Road, Near G K Vale Photostudio, Frazer Town, Bangalore",
                    "localityUrl": "bangalore\/frazer-town-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                        "name": "Ice Cream"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                        "name": "Desserts"
                    }
                ],
                "cuisines": "Ice Cream & Desserts",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "29 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/nic-ice-creams-frazer-town-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/nic-ice-creams-frazer-town-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.6 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19316327\",\"element_type\":\"listing\",\"rank\":1}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [

            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                        "aspect_ratio": 2.0625
                    },
                    "text": "Restaurant partner follows WHO protocol"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 50724,
                "name": "Natural Ice Cream",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/50724\/adb20cc3d424971e06802e03adcf5a44_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/50724\/adb20cc3d424971e06802e03adcf5a44_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.3",
                    "rating_text": "4.3",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "1,774",
                    "subtext": "REVIEW",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.1",
                            "reviewCount": "249",
                            "reviewTextSmall": "249 Reviews",
                            "subtext": "249 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.1",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.5",
                            "reviewCount": "1,525",
                            "reviewTextSmall": "1,525 Reviews",
                            "subtext": "1,525 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.5",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "800"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9300 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "St. Marks Road, Bangalore",
                    "address": "20, Ground Floor, 15\/16, House Of Lords, St. Marks Road, Bangalore",
                    "localityUrl": "bangalore\/st-marks-road-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                        "name": "Ice Cream"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                        "name": "Shake"
                    }
                ],
                "cuisines": "Ice Cream & Shake",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "13 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/natural-ice-cream-st-marks-road\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/natural-ice-cream-st-marks-road\/order",
                "clickActionDeeplink": ""
            },
            "distance": "702 m",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"50724\",\"element_type\":\"listing\",\"rank\":2}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [

            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                        "aspect_ratio": 2.0625
                    },
                    "text": "Restaurant partner follows WHO protocol"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19209813,
                "name": "Paakashala",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19209813\/98662a5e0bbd80f8735b5bb48ebbfc8d_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/19209813\/98662a5e0bbd80f8735b5bb48ebbfc8d_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.2",
                    "rating_text": "4.2",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "2,665",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "4.2",
                            "reviewCount": "305",
                            "reviewTextSmall": "305 Reviews",
                            "subtext": "305 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "4.2",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "2,360",
                            "reviewTextSmall": "2,360 Reviews",
                            "subtext": "2,360 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9250 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "MG Road, Bangalore",
                    "address": "46\/10, MG Road, Bangalore",
                    "localityUrl": "bangalore\/mg-road-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                        "name": "Biryani"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sandwich\/",
                        "name": "Sandwich"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                        "name": "Ice Cream"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    }
                ],
                "cuisines": "Biryani, Chinese, Sandwich",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "24 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/paakashala-mg-road-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/paakashala-mg-road-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.5 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19209813\",\"element_type\":\"listing\",\"rank\":3}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "30% OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19422875,
                "name": "Krishna Vaibhava",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/19422875\/14bb38a6e3fc9e743d4996aa0ef02993_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/19422875\/14bb38a6e3fc9e743d4996aa0ef02993_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.6",
                    "rating_text": "3.6",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "26.6K",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.1",
                            "reviewCount": "52",
                            "reviewTextSmall": "52 Reviews",
                            "subtext": "52 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.1",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "26.5K",
                            "reviewTextSmall": "26.5K Reviews",
                            "subtext": "26.5K Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9450 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Vijay Nagar, Bangalore",
                    "address": "1712, 17th Cross, 21st Main, Near Maruthi Mandir, Vijay Nagar, Bangalore",
                    "localityUrl": "bangalore\/vijay-nagar-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mithai\/",
                        "name": "Mithai"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                        "name": "Biryani"
                    }
                ],
                "cuisines": "Biryani, Chinese, Mithai",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "39 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/krishna-vaibhava-vijay-nagar-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/krishna-vaibhava-vijay-nagar-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "6.4 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19422875\",\"element_type\":\"listing\",\"rank\":4}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b950 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20355699,
                "name": "Sri Udupi Food Hub",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18683480\/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18683480\/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.7",
                    "rating_text": "3.7",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "1,468",
                    "subtext": "REVIEW",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.3",
                            "reviewCount": "7",
                            "reviewTextSmall": "7 Reviews",
                            "subtext": "7 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.3",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "1,461",
                            "reviewTextSmall": "1,461 Reviews",
                            "subtext": "1,461 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9650 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Majestic, Bangalore",
                    "address": "18, 1st Main Road, Gandhi Nagar, Majestic, Bangalore",
                    "localityUrl": "bangalore\/majestic-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                        "name": "Biryani"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sandwich\/",
                        "name": "Sandwich"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                        "name": "Desserts"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/juices\/",
                        "name": "Juices"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    }
                ],
                "cuisines": "Biryani, Chinese, Mithai",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "29 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/sri-udupi-food-hub-majestic-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/sri-udupi-food-hub-majestic-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20355699\",\"element_type\":\"listing\",\"rank\":5}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b9100 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [

            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20501302,
                "name": "Namaste",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18924790\/2bb03e756465e70fee66ed043a4fa6f0_o2_featured_v2.jpeg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18924790\/2bb03e756465e70fee66ed043a4fa6f0_o2_featured_v2.jpeg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.7",
                    "rating_text": "3.7",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "1,305",
                    "subtext": "REVIEW",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.3",
                            "reviewCount": "12",
                            "reviewTextSmall": "12 Reviews",
                            "subtext": "12 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.3",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.1",
                            "reviewCount": "1,293",
                            "reviewTextSmall": "1,293 Reviews",
                            "subtext": "1,293 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.1",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9200 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Malleshwaram, Bangalore",
                    "address": "501, Ground Floor, Lakkegowda Mansion, Sampige Road, Malleshwaram, Bangalore",
                    "localityUrl": "bangalore\/malleshwaram-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    }
                ],
                "cuisines": "South Indian, Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "32 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/namaste-malleshwaram-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/namaste-malleshwaram-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20501302\",\"element_type\":\"listing\",\"rank\":6}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b9150 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [

            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18874292,
                "name": "Kapoor's Cafe",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/58271\/ea3044ec553419682e64b98fd9340831_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/58271\/ea3044ec553419682e64b98fd9340831_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.9",
                    "rating_text": "3.9",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "5,535",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.5",
                            "reviewCount": "561",
                            "reviewTextSmall": "561 Reviews",
                            "subtext": "561 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.5",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.2",
                            "reviewCount": "4,974",
                            "reviewTextSmall": "4,974 Reviews",
                            "subtext": "4,974 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b91,000 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Jayanagar, Bangalore",
                    "address": "GVS Complex, 4th Floor, 3rd Block, Jayanagar, Bangalore",
                    "localityUrl": "bangalore\/jayanagar-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                        "name": "Fast Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                        "name": "Desserts"
                    }
                ],
                "cuisines": "North Indian, Street Food, Fast Food Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "47 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/kapoors-cafe-jayanagar-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/kapoors-cafe-jayanagar-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "4.4 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18874292\",\"element_type\":\"listing\",\"rank\":7}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b950 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19646989,
                "name": "The Belgian Waffle Co.",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18624503\/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18624503\/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.6",
                    "rating_text": "3.6",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "928",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.0",
                            "reviewCount": "4",
                            "reviewTextSmall": "4 Reviews",
                            "subtext": "4 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.0",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.2",
                            "reviewCount": "924",
                            "reviewTextSmall": "924 Reviews",
                            "subtext": "924 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9300 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Seshadripuram, Bangalore",
                    "address": "27\/2, Nehrunagar Main Road, Sheshadripuram, Seshadripuram, Bangalore",
                    "localityUrl": "bangalore\/seshadripuram-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/waffle\/",
                        "name": "Waffle"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2OFwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pancake\/",
                        "name": "Pancake"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                        "name": "Ice Cream"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                        "name": "Desserts"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                        "name": "Shake"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    }
                ],
                "cuisines": "Pancake ,Shake, Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "44 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/the-belgian-waffle-co-seshadripuram-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/the-belgian-waffle-co-seshadripuram-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "2.6 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19646989\",\"element_type\":\"listing\",\"rank\":8}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [

            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 53219,
                "name": "Anand Sweets And Savouries",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/53219\/9641bc40fa7534ecfb9d2952a21458e9_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/53219\/9641bc40fa7534ecfb9d2952a21458e9_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.4",
                    "rating_text": "4.4",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "2,965",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.4",
                            "reviewCount": "2,965",
                            "reviewTextSmall": "2,965 Reviews",
                            "subtext": "2,965 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.4",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9300 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Commercial Street, Bangalore",
                    "address": "8, Commercial Street, Bangalore",
                    "localityUrl": "bangalore\/commercial-street-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mithai\/",
                        "name": "Mithai"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    }
                ],
                "cuisines": "Mithai , Street Food, North Indian",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "30 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/anand-sweets-and-savouries-commercial-street-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/anand-sweets-and-savouries-commercial-street-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "2 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"53219\",\"element_type\":\"listing\",\"rank\":9}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [

            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18089679,
                "name": "Sri Udupi Park",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/59916\/95177ed226010a6be13935df30d552e4_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/59916\/95177ed226010a6be13935df30d552e4_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.0",
                    "rating_text": "4.0",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "8,973",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "3.7",
                            "reviewCount": "154",
                            "reviewTextSmall": "154 Reviews",
                            "subtext": "154 Dining Reviews",
                            "color": "#1C1C1C",
                            "ratingV2": "3.7",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.2",
                            "reviewCount": "8,819",
                            "reviewTextSmall": "8,819 Reviews",
                            "subtext": "8,819 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9200 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Residency Road, Bangalore",
                    "address": "57, Opposite Galaxy Mall, Residency Road, Bangalore",
                    "localityUrl": "bangalore\/residency-road-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                        "name": "South Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                        "name": "Street Food"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                        "name": "Shake"
                    }
                ],
                "cuisines": "South Indian ,North Indian, Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "30 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/sri-udupi-park-residency-road\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/sri-udupi-park-residency-road\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.6 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18089679\",\"element_type\":\"listing\",\"rank\":10}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "10% OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [

            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20337329,
                "name": "Lassi Shop",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/60069\/b5715d104a2580bb908f126b8dee7028_o2_featured_v2.jpeg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/60069\/b5715d104a2580bb908f126b8dee7028_o2_featured_v2.jpeg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.9",
                    "rating_text": "3.9",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "35",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.9",
                            "reviewCount": "35",
                            "reviewTextSmall": "35 Reviews",
                            "subtext": "35 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.9",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9150 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Majestic, Bangalore",
                    "address": "14, 2nd Cross, Gandhi Nagar, Y.Ramchandra Road, Majestic, Bangalore",
                    "localityUrl": "bangalore\/majestic-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/juices\/",
                        "name": "Juices"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                        "name": "Shake"
                    }
                ],
                "cuisines": "Pancake ,Shake, Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "28 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/lassi-shop-majestic-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/lassi-shop-majestic-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.9 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20337329\",\"element_type\":\"listing\",\"rank\":11}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [

            ],
            "isDisabled": false,
            "bottomContainers": [

            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20639739,
                "name": "Baskin Robbins - Ice Cream Desserts",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/51454\/ec37a79363ae4ea88c3be9ccd7989873_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/51454\/ec37a79363ae4ea88c3be9ccd7989873_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.8",
                    "rating_text": "3.8",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "38",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.8",
                            "reviewCount": "38",
                            "reviewTextSmall": "38 Reviews",
                            "subtext": "38 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.8",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9400 for two"
                },
                "cfo": {
                    "text": "\u20b9100 for one"
                },
                "locality": {
                    "name": "Garuda Mall, Magrath Road, Bangalore",
                    "address": "15\/17\/18\/27, Ground Floor, Garuda Mall, Brigade Road, Bangalore",
                    "localityUrl": "bangalore\/restaurants\/in\/garuda-mall-magrath-road"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                        "name": "Ice Cream"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                        "name": "Desserts"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bakery\/",
                        "name": "Bakery"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                        "name": "Shake"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                        "name": "Beverages"
                    }
                ],
                "cuisines": "Pancake ,Shake, Beverages",
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9100 for one"
                }
            },
            "order": {
                "deliveryTime": "22 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/baskin-robbins-ice-cream-desserts-1-brigade-road-bangalore\/order"
                }
            },
            "gold": [

            ],
            "takeaway": [

            ],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/baskin-robbins-ice-cream-desserts-1-brigade-road-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.7 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"735fd1ac-015c-489c-81d7-52f7ef7f1ef8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20639739\",\"element_type\":\"listing\",\"rank\":12}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [

            ],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b975 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [

            ]
        }, {
            "type": "restaurant",
            "info": {
                "resId": 19653936,
                "name": "RJ 14 Kitchen",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19653936\/4e9630aa19d3fabaa42ffb15478b42e8_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19653936\/4e9630aa19d3fabaa42ffb15478b42e8_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.2",
                    "rating_text": "3.2",
                    "rating_subtitle": "Average",
                    "rating_color": "CDD614",
                    "votes": "156",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.2",
                            "reviewCount": "156",
                            "reviewTextSmall": "156 Reviews",
                            "subtext": "156 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.2",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "500"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9400 for two"
                },
                "cfo": {
                    "text": "\u20b9250 for one"
                },
                "locality": {
                    "name": "Rajajinagar, Bangalore",
                    "address": "69, 8th Main Road, Rajajinagar, Bangalore",
                    "localityUrl": "bangalore\/rajajinagar-restaurants"
                },
                "timing": {
                    "text": "Closes in 8 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/rajasthani\/",
                        "name": "Rajasthani"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9250 for one"
                }
            },
            "order": {
                "deliveryTime": "45 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/rj-14-kitchen-rajajinagar-bangalore\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/rj-14-kitchen-rajajinagar-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "4.5 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"bbc32045-e1d5-4741-a4ab-51c69640d89a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19653936\",\"element_type\":\"listing\",\"rank\":1}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b950 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20537942,
                "name": "Paan House",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/20537942\/9ec1b309256eed3a2941a9ef4c8a1a3c_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/20537942\/9ec1b309256eed3a2941a9ef4c8a1a3c_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "4.3",
                    "rating_text": "4.3",
                    "rating_subtitle": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "62",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "4.3",
                            "reviewCount": "62",
                            "reviewTextSmall": "62 Reviews",
                            "subtext": "62 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "4.3",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "700"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9100 for two"
                },
                "cfo": {
                    "text": "\u20b9250 for one"
                },
                "locality": {
                    "name": "Frazer Town, Bangalore",
                    "address": "86, MM Road, Frazer Town, Bangalore",
                    "localityUrl": "bangalore\/frazer-town-restaurants"
                },
                "timing": {
                    "text": "Closes in 8 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0OFwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/paan\/",
                        "name": "Paan"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9250 for one"
                }
            },
            "order": {
                "deliveryTime": "35 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/paan-house-3-frazer-town-bangalore\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/paan-house-3-frazer-town-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "3.8 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"bbc32045-e1d5-4741-a4ab-51c69640d89a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20537942\",\"element_type\":\"listing\",\"rank\":2}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "10% OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": []
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20026967,
                "name": "Let's Celebrate",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20026967\/3ecf4da88bce8733d5586356c39c0039_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20026967\/3ecf4da88bce8733d5586356c39c0039_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.8",
                    "rating_text": "3.8",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "444",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.8",
                            "reviewCount": "444",
                            "reviewTextSmall": "444 Reviews",
                            "subtext": "444 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.8",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9600 for two"
                },
                "cfo": {
                    "text": "\u20b9250 for one"
                },
                "locality": {
                    "name": "Koramangala 2nd Block, Bangalore",
                    "address": "Shop 1 And 9, Ground Floor, I Main Road, Maruthinagar, Koramangala 2nd Block, Bangalore",
                    "localityUrl": "bangalore\/koramangala-2nd-block-restaurants"
                },
                "timing": {
                    "text": "Closes in 8 minutes",
                    "color": "#ab000d"
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bakery\/",
                        "name": "Bakery"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9250 for one"
                }
            },
            "order": {
                "deliveryTime": "55 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/lets-celebrate-koramangala-2nd-block-bangalore\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/lets-celebrate-koramangala-2nd-block-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "5.6 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"bbc32045-e1d5-4741-a4ab-51c69640d89a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20026967\",\"element_type\":\"listing\",\"rank\":3}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "40% OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": []
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19696726,
                "name": "Apna Ghar",
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19696726\/35396293a498545da68944313262bf77_o2_featured_v2.jpg"
                },
                "o2FeaturedImage": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19696726\/35396293a498545da68944313262bf77_o2_featured_v2.jpg"
                },
                "rating": {
                    "has_fake_reviews": 0,
                    "aggregate_rating": "3.7",
                    "rating_text": "3.7",
                    "rating_subtitle": "Good",
                    "rating_color": "9ACD32",
                    "votes": "203",
                    "subtext": "REVIEWS",
                    "is_new": false
                },
                "ratingNew": {
                    "newlyOpenedObj": null,
                    "suspiciousReviewObj": null,
                    "ratings": {
                        "DINING": {
                            "rating_type": "DINING",
                            "rating": "",
                            "reviewCount": "0",
                            "reviewTextSmall": "0 Reviews",
                            "subtext": "Does not offer Dining",
                            "color": "",
                            "ratingV2": "-",
                            "subtitle": "DINING",
                            "sideSubTitle": "Dining Reviews",
                            "bgColorV2": {
                                "type": "grey",
                                "tint": "500"
                            }
                        },
                        "DELIVERY": {
                            "rating_type": "DELIVERY",
                            "rating": "3.7",
                            "reviewCount": "203",
                            "reviewTextSmall": "203 Reviews",
                            "subtext": "203 Delivery Reviews",
                            "color": "#E23744",
                            "ratingV2": "3.7",
                            "subtitle": "DELIVERY",
                            "sideSubTitle": "Delivery Reviews",
                            "bgColorV2": {
                                "type": "green",
                                "tint": "600"
                            },
                            "newOnDelivery": false
                        }
                    }
                },
                "cft": {
                    "text": "\u20b9400 for two"
                },
                "cfo": {
                    "text": "\u20b9250 for one"
                },
                "locality": {
                    "name": "Shanti Nagar, Bangalore",
                    "address": "9, 5th Cross, Lakshmi Road, Shanti Nagar, Bangalore",
                    "localityUrl": "bangalore\/shanti-nagar-restaurants"
                },
                "timing": {
                    "text": "",
                    "color": ""
                },
                "cuisine": [
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                        "name": "North Indian"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                        "name": "Chinese"
                    },
                    {
                        "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                        "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                        "name": "Street Food"
                    }
                ],
                "should_ban_ugc": false,
                "costText": {
                    "text": "\u20b9250 for one"
                }
            },
            "order": {
                "deliveryTime": "34 min",
                "isServiceable": true,
                "hasOnlineOrdering": true,
                "actionInfo": {
                    "text": "Order Now",
                    "clickUrl": "\/bangalore\/apna-ghar-shanti-nagar-bangalore\/order"
                }
            },
            "gold": [],
            "takeaway": [],
            "cardAction": {
                "text": "",
                "clickUrl": "\/bangalore\/apna-ghar-shanti-nagar-bangalore\/order",
                "clickActionDeeplink": ""
            },
            "distance": "1.3 km",
            "isPromoted": false,
            "promotedText": "",
            "trackingData": [
                {
                    "table_name": "zsearch_events_log",
                    "payload": "{\"search_id\":\"bbc32045-e1d5-4741-a4ab-51c69640d89a\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19696726\",\"element_type\":\"listing\",\"rank\":4}",
                    "event_names": {
                        "tap": "{\"action\":\"tap\"}",
                        "impression": "{\"action\":\"impression\"}"
                    }
                }
            ],
            "allCTA": [],
            "promoOffer": "",
            "checkBulkOffers": true,
            "bulkOffers": [
                {
                    "text": "\u20b9100 OFF",
                    "color": {
                        "tint": "500",
                        "type": "blue"
                    }
                }
            ],
            "isDisabled": false,
            "bottomContainers": [
                {
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                        "aspect_ratio": 2.66666666667
                    },
                    "text": "Follows all Max Safety measures to ensure your food is safe"
                }
            ]
        },
    ]
    return (
        <div>

            <div className="restraContainer">
                {resData.map((restaurant) =>
                    <RestraContainer key=
                    {restaurant.info.resId} data={restaurant} />
                )}
            </div>
        </div>
    )
}
const HeaderComponent = () => (
    <div className="headerContainer">
        <div className="logoContainer">
            <img className="logoIcon" src="https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg" />
        </div>
        <div className="navBarContainer">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Cart</li>
                <li>Account</li>
            </ul>
        </div>

    </div>
)

const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyContainer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
