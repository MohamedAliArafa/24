var app = angular.module('app', ['ionic']);

app.controller("MyController", function ($scope, NewsService, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {

    $scope.model = {
        'SliderArticles': [],
        'ArabicArticles': [],
        'ArabicMain': [],
        'BusinessArticles': [],
        'BusinessMain': [],
        'HealthArticles': [],
        'HealthMain': [],
        'CultureArticles': [],
        'CultureMain': [],
        'DirectionsArticles': [],
        'DirectionsMain': [],
        'InternationalArticles': [],
        'InternationalMain': [],
        'LifeStyleArticles': [],
        'LifeStyleMain': [],
        'TechnologyArticles': [],
        'TechnologyMain': [],
        'VaritiesArticles': [],
        'VaritiessMain': [],
        'YouthArticles': [],
        'YouthMain': [],
        'SportArticles': [],
        'UAEArticles': [],
        'Pictures': []
    };
    
    $ionicSlideBoxDelegate.update();

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleRight();
        console.log("Toggle 2 ");
    };

    $scope.delay = 2000;

    $scope.nextSlide = function () {

        setTimeout(function () {
            $ionicSlideBoxDelegate.slide(1, [1000]);
            console.log("Slide 3 ");
            //your code to be executed after 1 seconds
        }, $scope.delay);

    };

    // login Func To track on click listener on any item
    $scope.login = function () {
         $ionicSlideBoxDelegate.update();
    };
    
    $scope.login2 = function() {
console.log("Menu Icon");
};
    
    
    NewsService.loadSlideArticles().then(function success(data) {
        console.log("Success!");
        $scope.model.SliderArticles = NewsService.SliderArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadArabic().then(function success(data) {
        console.log("Success!");
        $scope.model.ArabicArticles = NewsService.ArabicArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadArabicMain().then(function success(data) {
        console.log("Success!");
        $scope.model.ArabicMain = NewsService.ArabicMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadBusiness().then(function success(data) {
        console.log("Success!");
        $scope.model.BusinessArticles = NewsService.BusinessArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadBusinessMain().then(function success(data) {
        console.log("Success!");
        $scope.model.BusinessMain = NewsService.BusinessMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadHealth().then(function success(data) {
        console.log("Success!");
        $scope.model.HealthArticles = NewsService.HealthArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadHealthMain().then(function success(data) {
        console.log("Success!");
        $scope.model.HealthMain = NewsService.HealthMain;
    }, function error(data) {
        console.log("Error!");
    });
    NewsService.loadCulture().then(function success(data) {
        console.log("Success!");
        $scope.model.CultureArticles = NewsService.CultureArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadCultureMain().then(function success(data) {
        console.log("Success!");
        $scope.model.CultureMain = NewsService.CultureMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadDirections().then(function success(data) {
        console.log("Success!");
        $scope.model.DirectionsArticles = NewsService.DirectionsArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadDirectionsMain().then(function success(data) {
        console.log("Success!");
        $scope.model.DirectionsMain = NewsService.DirectionsMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadInternational().then(function success(data) {
        console.log("Success!");
        $scope.model.InternationalArticles = NewsService.InternationalArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadInternationalMain().then(function success(data) {
        console.log("Success!");
        $scope.model.InternationalMain = NewsService.InternationalMain;
    }, function error(data) {
        console.log("Error!");
    });
    NewsService.loadLifeStyle().then(function success(data) {
        console.log("Success!");
        $scope.model.LifeStyleArticles = NewsService.LifeStyleArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadLifeStyleMain().then(function success(data) {
        console.log("Success!");
        $scope.model.LifeStyleMain = NewsService.LifeStyleMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadTechnology().then(function success(data) {
        console.log("Success!");
        $scope.model.TechnologyArticles = NewsService.TechnologyArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadTechnologyMain().then(function success(data) {
        console.log("Success!");
        $scope.model.TechnologyMain = NewsService.TechnologyMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadVarities().then(function success(data) {
        console.log("Success!");
        $scope.model.VaritiesArticles = NewsService.VaritiesArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadVaritiesMain().then(function success(data) {
        console.log("Success!");
        $scope.model.VaritiessMain = NewsService.VaritiessMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadYouth().then(function success(data) {
        console.log("Success!");
        $scope.model.YouthArticles = NewsService.YouthArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadYouthMain().then(function success(data) {
        console.log("Success!");
        $scope.model.YouthMain = NewsService.YouthMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadSport().then(function success(data) {
        console.log("Success!");
        $scope.model.SportArticles = NewsService.SportArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadUAE().then(function success(data) {
        console.log("Success!");
        $scope.model.UAEArticles = NewsService.UAEArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadPictures().then(function success(data) {
        console.log("Success!");
        $scope.model.Pictures = NewsService.Pictures;
    }, function error(data) {
        console.log("Error!");
    });

});

app.service("NewsService", function ($http, $q) {
    var self = {
        'SliderArticles': [],
        'ArabicArticles': [],
        'ArabicMain': [],
        'BusinessArticles': [],
        'BusinessMain': [],
        'HealthArticles': [],
        'HealthMain': [],
        'CultureArticles': [],
        'CultureMain': [],
        'DirectionsArticles': [],
        'DirectionsMain': [],
        'InternationalArticles': [],
        'InternationalMain': [],
        'LifeStyleArticles': [],
        'LifeStyleMain': [],
        'TechnologyArticles': [],
        'TechnologyMain': [],
        'VaritiesArticles': [],
        'VaritiessMain': [],
        'YouthArticles': [],
        'YouthMain': [],
        'SportArticles': [],
        'UAEArticles': [],
        'Pictures': [],
        'replace': function (str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }
        ,
        'loadSlideArticles': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetArticles?NumberOfItems=5")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.SliderArticles = JSON.parse(data);
                        console.log("loadSlider (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadArabic': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetArabicArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.ArabicArticles = JSON.parse(data);
                        console.log("loadArabic (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadArabicMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetArabicMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.ArabicMain = JSON.parse(data);
                        console.log("loadArabicMain (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadBusiness': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetBusinessArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.BusinessArticles = JSON.parse(data);
                        console.log("loadBusiness (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadBusinessMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetBusinessMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.BusinessMain = JSON.parse(data);
                        console.log("loadBusiness (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadHealth': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetHealthArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.HealthArticles = JSON.parse(data);
                        console.log("loadHealth (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadHealthMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetHealthMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.HealthMain = JSON.parse(data);
                        console.log("loadHealth (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadCulture': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetCultureArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.CultureArticles = JSON.parse(data);
                        console.log("loadCulture (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadCultureMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetCultureMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.CultureMain = JSON.parse(data);
                        console.log("loadCultureMain (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadDirections': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetDirectionsArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.DirectionsArticles = JSON.parse(data);
                        console.log("loadDirections (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadDirectionsMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetDirectionsMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.DirectionsMain = JSON.parse(data);
                        console.log("loadDirections (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadInternational': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetInternationalArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.InternationalArticles = JSON.parse(data);
                        console.log("loadInternational (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadInternationalMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetInternationalMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.InternationalMain = JSON.parse(data);
                        console.log("loadInternational (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadLifeStyle': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetLifeStyleArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.LifeStyleArticles = JSON.parse(data);
                        console.log("loadLifeStyle (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadLifeStyleMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetLifeStyleMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.LifeStyleMain = JSON.parse(data);
                        console.log("loadLifeStyleMain (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadTechnology': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetTechnologyArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.TechnologyArticles = JSON.parse(data);
                        console.log("loadTechnology (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadTechnologyMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetTechnologyMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.TechnologyMain = JSON.parse(data);
                        console.log("loadTechnology (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadVarities': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetVaritiesArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.VaritiesArticles = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadVaritiesMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetVaritiesMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.VaritiessMain = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }

        ,
        'loadYouth': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetYouthArticles?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.YouthArticles = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
        ,
        'loadYouthMain': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetYouthMainArticle")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.YouthMain = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }

        ,
        'loadSport': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetScrollArticlesForSport?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.SportArticles = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }

        ,
        'loadUAE': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetScrollArticlesForUAE?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.UAEArticles = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }

        ,
        'loadPictures': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetPictures?NumberOfItems=2")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.Pictures = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        }
    };
    return self;

});
