var app = angular.module('app', ['ionic']);

app.config(function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'index.html',
                controller: 'IndexCtrl'
            })

            .state('splash', {
                url: '/splash',
                templateUrl: 'Splash.html',
                controller: 'MyController'
            });

    $urlRouterProvider.otherwise("/");

});

app.controller("Splash-Controller", function ($scope) {

    $scope.delay2 = 8000;
    $scope.GoToSplash = function () {

        setTimeout(function () {
            window.location.replace("index2.html");
            console.log("HI Replace ");
            //window.location="News2.html";

        }, $scope.delay2);


    };





    $scope.GoToSplash();

});





app.controller("MyController", function ($scope, NewsService, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $sce, $state) {

    $scope.model = {
        'RecentArticles': [],
        'RecentArticlesAll': [],
        'FrequentArticles': [],
        'ArabicArticles': [],
        'ArabicMain': [],
        'ArabicArticlesAll': [],
        'BusinessArticles': [],
        'BusinessMain': [],
        'BusinessArticlesAll': [],
        'HealthArticles': [],
        'HealthArticlesAll': [],
        'HealthMain': [],
        'CultureArticles': [],
        'CultureArticlesAll': [],
        'CultureMain': [],
        'DirectionsArticles': [],
        'DirectionsArticlesAll': [],
        'DirectionsMain': [],
        'InternationalArticles': [],
        'InternationalMain': [],
        'InternationalArticlesAll': [],
        'LifeStyleArticles': [],
        'LifeStyleArticlesAll': [],
        'LifeStyleMain': [],
        'TechnologyArticles': [],
        'TechnologyArticlesAll': [],
        'TechnologyMain': [],
        'VaritiesArticles': [],
        'VaritiesArticlesAll': [],
        'VaritiessMain': [],
        'YouthArticles': [],
        'YouthArticlesAll': [],
        'YouthMain': [],
        'SportArticles': [],
        'SportArticlesAll': [],
        'UAEArticles': [],
        'UAEArticlesAll': [],
        'Pictures': [],
        'PicturesAll': [],
        'Videos': [],
        'Article': [],
        'RelatedArticles': []

    };
	
	$scope.GoToYoutube = function(){
		  window.location = "https://www.youtube.com/user/20fourMedia";
			console.log("Test Youtube");
		};


    $scope.sendData_RelatedArticles = function (ArticleId, SectionId, NumberOfItems) {
        // Initialize packed or we get the word 'undefined'
        //window.location = "Article-Detail.html?" + index;
        console.log("ArticleId : " + ArticleId + "  SectionId : " + SectionId + "  NumberOfItems : " + NumberOfItems);
        
        NewsService.loadRelatedArticles(ArticleId, SectionId, NumberOfItems).then(function success(data) {
            $scope.model.RelatedArticles = NewsService.RelatedArticles;
            console.log("Related Article Test 1" + $scope.model.RelatedArticles);


        }, function error(data) {
            console.log("Error!");
        });
        
        
    };




    $scope.sendData = function (index) {
        // Initialize packed or we get the word 'undefined'
        window.location = "Article-Detail.html?" + index;
        console.log(index);

    };

    var query = window.location.search;
    // Skip the leading ?, which should always be there, 
    // but be careful anyway
    if (query.substring(0, 1) === '?') {
        query = query.substring(1);
    }

    NewsService.loadArticle(query).then(function success(data) {
        $scope.model.Article = NewsService.Article;
        console.log($scope.model.Article);

        $scope.sendData_RelatedArticles($scope.model.Article.ArticleId, $scope.model.Article.SectionId, 4);


    }, function error(data) {
        console.log("Error!");
    });





//    var query2 = window.location.search;
//    // Skip the leading ?, which should always be there, 
//    // but be careful anyway
//    if (query2.substring(0, 1) === '?') {
//        query2 = query2.substring(1);
//    }







    $ionicSlideBoxDelegate.update();

    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };

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

    $scope.login2 = function () {
        console.log("Menu Icon Test Call");
    };

    $scope.GoToSplash2 = function () {

        /// window.location.replace("index2.html");
        console.log("HI Replace ");
        window.location = "News2.html";

    };

    //   $scope.GoToSplash();
    //  $scope.login2();

    NewsService.loadRecentArticles(2).then(function success(data) {
        console.log("Success!");
        $scope.model.RecentArticles = NewsService.RecentArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadRecentArticles(15).then(function success(data) {
        console.log("Success!");
        $scope.model.RecentArticlesAll = NewsService.RecentArticles;
    }, function error(data) {
        console.log("Error!");
    });






    NewsService.loadFrequentArticles().then(function success(data) {
        console.log("Success!");
        $scope.model.FrequentArticles = NewsService.FrequentArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadArabic(2).then(function success(data) {
        console.log("Success!");
        $scope.model.ArabicArticles = NewsService.ArabicArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadArabic(15).then(function success(data) {
        console.log("Success!");
        $scope.model.ArabicArticlesAll = NewsService.ArabicArticles;
    }, function error(data) {
        console.log("Error!");
    });




    NewsService.loadArabicMain().then(function success(data) {
        console.log("Success!");
        $scope.model.ArabicMain = NewsService.ArabicMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadBusiness(2).then(function success(data) {
        console.log("Success!");
        $scope.model.BusinessArticles = NewsService.BusinessArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadBusiness(15).then(function success(data) {
        console.log("Success!");
        $scope.model.BusinessArticlesAll = NewsService.BusinessArticles;
    }, function error(data) {
        console.log("Error!");
    });




    NewsService.loadBusinessMain().then(function success(data) {
        console.log("Success!");
        $scope.model.BusinessMain = NewsService.BusinessMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadHealth(2).then(function success(data) {
        console.log("Success!");
        $scope.model.HealthArticles = NewsService.HealthArticles;
    }, function error(data) {
        console.log("Error!");
    });


    NewsService.loadHealth(15).then(function success(data) {
        console.log("Success!");
        $scope.model.HealthArticlesAll = NewsService.HealthArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadHealthMain().then(function success(data) {
        console.log("Success!");
        $scope.model.HealthMain = NewsService.HealthMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadCulture(2).then(function success(data) {
        console.log("Success!");
        $scope.model.CultureArticles = NewsService.CultureArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadCulture(15).then(function success(data) {
        console.log("Success!");
        $scope.model.CultureArticlesAll = NewsService.CultureArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadCultureMain().then(function success(data) {
        console.log("Success!");
        $scope.model.CultureMain = NewsService.CultureMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadDirections(2).then(function success(data) {
        console.log("Success!");
        $scope.model.DirectionsArticles = NewsService.DirectionsArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadDirections(15).then(function success(data) {
        console.log("Success!");
        $scope.model.DirectionsArticlesAll = NewsService.DirectionsArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadDirectionsMain().then(function success(data) {
        console.log("Success!");
        $scope.model.DirectionsMain = NewsService.DirectionsMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadInternational(2).then(function success(data) {
        console.log("Success!");
        $scope.model.InternationalArticles = NewsService.InternationalArticles;
    }, function error(data) {
        console.log("Error!");
    });
    NewsService.loadInternational(15).then(function success(data) {
        console.log("Success!");
        $scope.model.InternationalArticlesAll = NewsService.InternationalArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadInternationalMain().then(function success(data) {
        console.log("Success!");
        $scope.model.InternationalMain = NewsService.InternationalMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadLifeStyle(2).then(function success(data) {
        console.log("Success!");
        $scope.model.LifeStyleArticles = NewsService.LifeStyleArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadLifeStyle(15).then(function success(data) {
        console.log("Success!");
        $scope.model.LifeStyleArticlesAll = NewsService.LifeStyleArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadLifeStyleMain().then(function success(data) {
        console.log("Success!");
        $scope.model.LifeStyleMain = NewsService.LifeStyleMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadTechnology(2).then(function success(data) {
        console.log("Success!");
        $scope.model.TechnologyArticles = NewsService.TechnologyArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadTechnology(15).then(function success(data) {
        console.log("Success!");
        $scope.model.TechnologyArticlesAll = NewsService.TechnologyArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadTechnologyMain().then(function success(data) {
        console.log("Success!");
        $scope.model.TechnologyMain = NewsService.TechnologyMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadVarities(2).then(function success(data) {
        console.log("Success!");
        $scope.model.VaritiesArticles = NewsService.VaritiesArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadVarities(15).then(function success(data) {
        console.log("Success!");
        $scope.model.VaritiesArticlesAll = NewsService.VaritiesArticles;
    }, function error(data) {
        console.log("Error!");
    });


    NewsService.loadVaritiesMain().then(function success(data) {
        console.log("Success!");
        $scope.model.VaritiessMain = NewsService.VaritiessMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadYouth(2).then(function success(data) {
        console.log("Success!");
        $scope.model.YouthArticles = NewsService.YouthArticles;
    }, function error(data) {
        console.log("Error!");
    });


    NewsService.loadYouth(15).then(function success(data) {
        console.log("Success!");
        $scope.model.YouthArticlesAll = NewsService.YouthArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadYouthMain().then(function success(data) {
        console.log("Success!");
        $scope.model.YouthMain = NewsService.YouthMain;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadSport(2).then(function success(data) {
        console.log("Success!");
        $scope.model.SportArticles = NewsService.SportArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadSport(15).then(function success(data) {
        console.log("Success!");
        $scope.model.SportArticlesAll = NewsService.SportArticles;
    }, function error(data) {
        console.log("Error!");
    });



    NewsService.loadUAE(2).then(function success(data) {
        console.log("Success!");
        $scope.model.UAEArticles = NewsService.UAEArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadUAE(15).then(function success(data) {
        console.log("Success!");
        $scope.model.UAEArticlesAll = NewsService.UAEArticles;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadPictures(2).then(function success(data) {
        console.log("Success!");
        $scope.model.Pictures = NewsService.Pictures;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadPictures(15).then(function success(data) {
        console.log("Success!");
        $scope.model.PicturesAll = NewsService.Pictures;
    }, function error(data) {
        console.log("Error!");
    });

    NewsService.loadVideos().then(function success(data) {
        console.log("Success!");
        $scope.model.Videos = NewsService.Videos;
    }, function error(data) {
        console.log("Error!");
    });



});

app.service("NewsService", function ($http, $q) {
    var self = {
        'RecentArticles': [],
        'FrequentArticles': [],
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
        'Videos': [],
        'Article': [],
        'RelatedArticles': [],
        'replace': function (str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }
        ,
        'loadRecentArticles': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetScrollArticles?NumberOfItems=15")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.RecentArticles = JSON.parse(data);
                        console.log("loadRecentArticles (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadFrequentArticles': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetMostRead?NumberOfItems=15")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://24.ae');
                        self.FrequentArticles = JSON.parse(data);
                        console.log("loadFrequentArticles (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadArabic': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetArabicArticles?NumberOfItems=" + ArticleNo)
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
        'loadBusiness': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetBusinessArticles?NumberOfItems=" + ArticleNo)
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
        'loadHealth': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetHealthArticles?NumberOfItems=" + ArticleNo)
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
        'loadCulture': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetCultureArticles?NumberOfItems=" + ArticleNo)
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
        'loadDirections': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetDirectionsArticles?NumberOfItems=" + ArticleNo)
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
        'loadInternational': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetInternationalArticles?NumberOfItems=" + ArticleNo)
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
        'loadLifeStyle': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetLifeStyleArticles?NumberOfItems=" + ArticleNo)
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
        'loadTechnology': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetTechnologyArticles?NumberOfItems=" + ArticleNo)
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
        'loadVarities': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetVaritiesArticles?NumberOfItems=" + ArticleNo)
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
        'loadYouth': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetYouthArticles?NumberOfItems=" + ArticleNo)
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
        'loadSport': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetScrollArticlesForSport?NumberOfItems=" + ArticleNo)
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
        'loadUAE': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetScrollArticlesForUAE?NumberOfItems=" + ArticleNo)
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
        'loadPictures': function (ArticleNo) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetPictures?NumberOfItems=" + ArticleNo)
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('24.ae').join('http://24.ae');
                        self.Pictures = JSON.parse(data);
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadVideos': function () {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/Get24Videos?NumberOfItems=10")
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('~').join('http://video.24.ae');
                        data = data.split('watch?v=').join('embed/');
                        self.Videos = JSON.parse(data);
                        console.log(self.Videos);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadArticle': function (id) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetArticleDetails?ArticleId=" + id)
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('24.ae').join('http://24.ae');
                        self.Article = JSON.parse(data);
                        console.log(self.Article);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadRelatedArticles': function (ArticleId, SectionId, NumberOfItems) {
            var d = $q.defer();
            $http.get("http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx/GetRelatedArticles?NumberOfItems=" + NumberOfItems + "&SectionId=" + SectionId + "&ArticleId=" + ArticleId)
                    .success(function success(data) {
                        data = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                        data = data.replace("<string xmlns=\"http://24-MobData.org/\">", "");
                        data = data.replace("</string>", "");
                        data = data.split('24.ae').join('http://24.ae');
                        self.RelatedArticles = JSON.parse(data);
                        console.log(self.RelatedArticles);
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
