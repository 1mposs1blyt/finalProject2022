// Мне нужно, что ты посылал мне такой объект 
// Ты  можешь добавлять в эти объекты что угодно помимо этого
var items = {
            "topDishesCards": 
// должен быть список из 10 карточек
                [{
                    "name": "Жаркое",
                    // Название блюда
                    "image": ".png",
                    // Основная картинка блюда
                    "tags": [{ "tagName": "asd" }, { "tagName": "dsa" }],
                    // Список с тэгами, в каждом имя тэга
                    "descripton": "Lorem ipsum dolor sit amet.",
                    // Описание блюда
                    "coockingtime": "1 час",
                    // Время приготовления блюда
                    "id": "id",
                    // id блюда
                    "isLiked": "/images/likedHeart.svg если лайкнуто, /images/unlikedHeart.svg, если не лайкнуто"
                    // Лайкнуто ли блюдо
                },
                {
                    "name": "Жаркое",
                    "image": ".png",
                    "tags": [{ "tagName": "asd" }, { "tagName": "dsa" }],
                    "descripton": "Lorem ipsum dolor sit amet.",
                    "preptime": "1 час"
                }
            // нужно 10 штук
            ],

            
            "mostPopularDishes": 
            // Самые популярные блюда
            [{
                    "name": "Жаркое",
                    // Название блюда
                    "image": ".png",
                    // Основная картинка блюда
                    "tags": [{ "tagName": "asd" }, { "tagName": "dsa" }],
                    // Список с тэгами, в каждом имя тэга
                    "descripton": "Lorem ipsum dolor sit amet.",
                    // Описание блюда
                    "preptime": "1 час"
                    // Время приготовления блюда
                }
            // нужно 2 штуки
            ],


            "ingridientsTypes":
            // Все типы ингридиентов для поиска на главной странице
                [{
                    "ingrName": "Фрукты",
                    // Название типа ингидиентов
                    "ingrID": ""
                    // То, что я буду посылать на сервер при нажатии
                }
            // Все типы ингридиентов
            ]
        };