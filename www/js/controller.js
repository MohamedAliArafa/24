var con = angular.module('app.controller', ['app.service', 'ngCordova']);
con.controller("Splash-Controller", /**
 * Splash Screen Controller
 */
        function ($scope) {
            $scope.delay2 = 8000;
            $scope.GoToSplash = function () {
                setTimeout(function () {
                    window.location.replace("homePage.html");
                    console.log("Splash Screen !!");
                }, $scope.delay2);
            };
            $scope.GoToSplash();
        });
con.controller("sideMenuController", /**
 * Splash Screen Controller
 */
        function ($scope) {
//            $scope.GoToYoutube = function () {
//                window.plugins.webintent.startActivity({
//                    action: WebIntent.ACTION_VIEW,
//                    url: 'geo:0,0?q=' + 'new york'},
//                        function () {},
//                        function (e) {
//                            alert('Failed to open URL via Android Intent');
//                        }
//                );
//            };
        });
con.controller("searchDetailsController", function ($scope, NewsService) {
    var query = window.location.search;
    // Skip the leading ?, which should always be there, 
    // but be careful anyway
    if (query.substring(0, 1) === '?') {
        query = query.substring(1);
    }
    var parm = query.split(',');
    for (i = 0; (i < parm.length); i++) {
        parm[i] = unescape(parm[i]);
    }
    console.log(parm);
    $scope.model = NewsService;
    NewsService.loadSearchArticles(parm[0], parm[1], parm[2], parm[3]);
    $scope.sendData = function (index) {
        // Initialize packed or we get the word 'undefined'
        if (typeof index === 'undefined') {

        } else {
            window.location = "Article-Detail.html?" + index;
            console.log(index);
        }

    };
});
con.controller("searchController", /**
 * Splash Screen Controller
 */
        function ($scope, NewsService, $ionicPopup) {

            $scope.model = {
                'title': '',
                'date': '',
                'sectionId': '31',
                'NumberOfItems': '5'
            };
            $scope.search = function () {
                if ($scope.model.title === '') {
                    $scope.showAlert = function () {
                        var alertPopup = $ionicPopup.alert({
                            title: 'أدخل كلمات بحث',
                            template: 'من فضلك قم بإدخال على الاقل كلمة واحدة'
                        });
                        alertPopup.then(function (res) {
                            console.log('Thank you for not eating my delicious ice cream cone');
                        });
                    };
                } else {
                    window.location = "searchResults.html?" + $scope.model.title + "," + $scope.model.date + "," + $scope.model.sectionId + "," + $scope.model.NumberOfItems;
                }
            };
        });
con.controller("articleDetailController", /**
 * Home Page Controller
 */
        function ($scope, NewsService, $cordovaSocialSharing) {
            var query = window.location.search;
            // Skip the leading ?, which should always be there, 
            // but be careful anyway
            if (query.substring(0, 1) === '?') {
                query = query.substring(1);
            }

            $scope.share = function () {
                $cordovaSocialSharing.share("Hello World", "Hi", null, "http://google.com");
            };
            $scope.model = NewsService;
            NewsService.loadArticle(query).then(function success(data) {
                $scope.sendData_RelatedArticles($scope.model.Article.ArticleId, $scope.model.Article.SectionId, 4);
            }, function error(data) {
                console.log("Error!");
            });
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
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }

            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
        });
con.controller('shareCtrl', ['$scope', function ($scope) {
        $scope.whatsappShare = function () {
            window.plugins.socialsharing.shareViaWhatsApp('Digital Signature Maker', null /* img */, "https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker" /* url */, null, function (errormsg) {
                alert("Error: Cannot Share");
            });
        };
        $scope.twitterShare = function () {
            window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function (errormsg) {
                alert("Error: Cannot Share");
            });
        };
        $scope.OtherShare = function () {
            window.plugins.socialsharing.share('Digital Signature Maker', null, null, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker');
        };
    }]);
con.controller("homePageController", /**
 * Home Page Controller
 */
        function ($scope, $ionicLoading, NewsService) {

            $scope.model = NewsService;
            NewsService.loadArabic(2).then(function success(data) {
                $scope.show.Arabic = 'false';
            }, function error(data) {
                console.log("Error!");
            });
            NewsService.loadArabicMain();
            NewsService.loadInternational(2);
            NewsService.loadInternationalMain();
            NewsService.loadUAE(2);
            NewsService.loadDirections(2);
            NewsService.loadDirectionsMain();
            NewsService.loadTechnology(2);
            NewsService.loadTechnologyMain();
            NewsService.loadHealth(2);
            NewsService.loadHealthMain();
            NewsService.loadSport(2);
            NewsService.loadLifeStyle(2);
            NewsService.loadLifeStyleMain();
            NewsService.loadVarities(2);
            NewsService.loadVaritiesMain();
            NewsService.loadBusiness(2);
            NewsService.loadBusinessMain();
            NewsService.loadCulture(2);
            NewsService.loadCultureMain();
            NewsService.loadYouth(2);
            NewsService.loadYouthMain();
            NewsService.loadPictures(2);

            $scope.show = {
                'Arabic': 'true',
                'International': 'true',
                'UAE': 'true',
                'Directions': 'true',
                'Technology': 'true',
                'Health': 'true',
                'Sport': 'true',
                'LifeStyle': 'true',
                'Varities': 'true',
                'Business': 'true',
                'Culture': 'true',
                'Youth': 'true',
                'Pictures': 'true'
            };

            $scope.load = {
                /**
                 * Paging Loader
                 */
                'loadMore': function () {
                    console.log("More !!");
                }
            };

            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
        });

con.controller("videoPageController", /**
 * Home Page Controller
 */
        function ($scope, NewsService) {

            $scope.model = NewsService;

            NewsService.loadVideos(15);

            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Video-Detail.html?" + index;
                    console.log(index);
                }
            };

            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };

            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };

        });

con.controller("videoDetailController", /**
 * Home Page Controller
 */
        function ($scope, NewsService, $cordovaSocialSharing, $ionicSideMenuDelegate) {
            var query = window.location.search;
            // Skip the leading ?, which should always be there, 
            // but be careful anyway
            if (query.substring(0, 1) === '?') {
                query = query.substring(1);
            }
            $scope.model = NewsService;
            NewsService.loadVideo(query).then(function success(data) {
                //  $scope.sendData_RelatedArticles($scope.model.Article.ArticleId, $scope.model.Article.SectionId, 4);
            }, function error(data) {
                console.log("Error!");
            });

            $scope.share = function (title, disc, url) {
                $cordovaSocialSharing.share(title, disc, null, url);
            };



            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleRight();
                console.log("Toggle 2 ");
            };

//            $scope.sendData_RelatedArticles = function (ArticleId, SectionId, NumberOfItems) {
//                // Initialize packed or we get the word 'undefined'
//                //window.location = "Article-Detail.html?" + index;
//                console.log("ArticleId : " + ArticleId + "  SectionId : " + SectionId + "  NumberOfItems : " + NumberOfItems);
//                NewsService.loadRelatedArticles(ArticleId, SectionId, NumberOfItems).then(function success(data) {
//                    $scope.model.RelatedArticles = NewsService.RelatedArticles;
//                    console.log("Related Article Test 1" + $scope.model.RelatedArticles);
//                }, function error(data) {
//                    console.log("Error!");
//                });
//            };

            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }

            };

//            $scope.goToCategory = function (catID) {
//                // Initialize packed or we get the word 'undefined'
//                window.location = "category.html?" + catID;
//                console.log(catID);
//
//            };
        });
        
        con.controller("videoCategoryController", /**
 * Side navigation Menu Controller
 */
        function ($scope, NewsService, $ionicSideMenuDelegate) {
            var query = window.location.search;
            // Skip the leading ?, which should always be there, 
            // but be careful anyway
            if (query.substring(0, 1) === '?') {
                query = query.substring(1);
            }
            
            
            $scope.model = {
                'Title': '',
                'MainArticle': [],
                'Videos': []
            };

            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleRight();
                console.log("Toggle 2 ");
            };

            /* Select Correct Catrgory */
            
              if (query === 'VideoNews') {
                $scope.model.Title = 'الإخبارية';
                NewsService.loadPublishMainVideoInChannel(1).then(function success(data) {
                    $scope.model.MainArticle = NewsService.PublishMainVideoInChannel;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadPublishVideosByChannelId(1,4).then(function success(data) {
                    $scope.model.Videos = NewsService.PublishVideosByChannelId;
                }, function error(data) {
                    console.log("Error!");
                });
            }



            if (query === 'VideoUAE') {
                $scope.model.Title = 'الإماراتية';
              NewsService.loadPublishMainVideoInChannel(2).then(function success(data) {
                    $scope.model.MainArticle = NewsService.PublishMainVideoInChannel;
                }, function error(data) {
                    console.log("Error!");
                });
               NewsService.loadPublishVideosByChannelId(2,4).then(function success(data) {
                    $scope.model.Videos = NewsService.PublishVideosByChannelId;
                }, function error(data) {
                    console.log("Error!");
                });
            }

          
            if (query === 'VideoDocumentry') {
                $scope.model.Title = 'الوثائقية';
                 NewsService.loadPublishMainVideoInChannel(3).then(function success(data) {
                    $scope.model.MainArticle = NewsService.PublishMainVideoInChannel;
                }, function error(data) {
                    console.log("Error!");
                });
               NewsService.loadPublishVideosByChannelId(3,4).then(function success(data) {
                    $scope.model.Videos = NewsService.PublishVideosByChannelId;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'VideoVarities') {
                $scope.model.Title = 'منوعات';
                NewsService.loadPublishMainVideoInChannel(4).then(function success(data) {
                    $scope.model.MainArticle = NewsService.PublishMainVideoInChannel;
                }, function error(data) {
                    console.log("Error!");
                });
               NewsService.loadPublishVideosByChannelId(4,4).then(function success(data) {
                    $scope.model.Videos = NewsService.PublishVideosByChannelId;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'VideoSport') {
                $scope.model.Title = 'ملاعب';
                NewsService.loadPublishMainVideoInChannel(7).then(function success(data) {
                    $scope.model.MainArticle = NewsService.PublishMainVideoInChannel;
                }, function error(data) {
                    console.log("Error!");
                });
               NewsService.loadPublishVideosByChannelId(7,4).then(function success(data) {
                    $scope.model.Videos = NewsService.PublishVideosByChannelId;
                }, function error(data) {
                    console.log("Error!");
                });
            }

    
            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Video-Detail.html?" + index;
                    console.log(index);
                }
            };

            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "Video-category.html?" + catID;
                console.log(catID);

            };

        });
        
        
con.controller("frequentPageController", /**
 * Home Page Controller
 */
        function ($scope, NewsService) {

            $scope.model = NewsService;
            NewsService.loadFrequentArticles();
            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
        });
con.controller("recentPageController", /**
 * Home Page Controller
 */
        function ($scope, NewsService) {

            $scope.model = NewsService;
            NewsService.loadRecentArticles();
            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
        });

con.controller("categoryController", /**
 * Side navigation Menu Controller
 */
        function ($scope, NewsService, $timeout) {
            var query = window.location.search;
            // Skip the leading ?, which should always be there, 
            // but be careful anyway
            if (query.substring(0, 1) === '?') {
                query = query.substring(1);
            }

            $scope.counter = 6;
            $scope.model = {
                'Title': '',
                'MainArticle': [],
                'Articles': [],
                'moreDataCanBeLoaded': true
            };

            $scope.load = {
                'loadMore': function () {
                    if (query === 'Recent') {
                        NewsService.loadRecentArticles($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.RecentArticles) {
                                $scope.model.Articles = NewsService.RecentArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Arabic') {
                        NewsService.loadArabic($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.ArabicArticles) {
                                $scope.model.Articles = NewsService.ArabicArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'International') {
                        NewsService.loadInternational($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.InternationalArticles) {
                                $scope.model.Articles = NewsService.InternationalArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'UAE') {
                        NewsService.loadUAE($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.UAEArticles) {
                                $scope.model.Articles = NewsService.UAEArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Directions') {
                        NewsService.loadDirections($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.DirectionsArticles) {
                                $scope.model.Articles = NewsService.DirectionsArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Technology') {
                        NewsService.loadTechnology($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.TechnologyArticles) {
                                $scope.model.Articles = NewsService.TechnologyArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Health') {
                        NewsService.loadHealth($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.HealthArticles) {
                                $scope.model.Articles = NewsService.HealthArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Sport') {
                        NewsService.loadSport($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.SportArticles) {
                                $scope.model.Articles = NewsService.SportArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'LifeStyle') {
                        NewsService.loadLifeStyle($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.LifeStyleArticles) {
                                $scope.model.Articles = NewsService.LifeStyleArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Varitiess') {
                        NewsService.loadVarities($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.VaritiesArticles) {
                                $scope.model.Articles = NewsService.VaritiesArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Business') {
                        NewsService.loadBusiness($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.BusinessArticles) {
                                $scope.model.Articles = NewsService.BusinessArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Culture') {
                        NewsService.loadCulture($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.CultureArticles) {
                                $scope.model.Articles = NewsService.CultureArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Youth') {
                        NewsService.loadYouth($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.YouthArticles) {
                                $scope.model.Articles = NewsService.YouthArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Pictures') {
                        NewsService.loadPictures($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.Pictures) {
                                $scope.model.Articles = NewsService.Pictures;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Frequent') {
                        NewsService.loadFrequentArticles($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.FrequentArticles) {
                                $scope.model.Articles = NewsService.FrequentArticles;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }

                    if (query === 'Videos') {
                        NewsService.loadVideos($scope.counter).then(function success(data) {
                            if ($scope.model.Articles < NewsService.Videos) {
                                $scope.model.Articles = NewsService.Videos;
                                $scope.counter = $scope.counter + 5;
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("true");
                                $scope.model.moreDataCanBeLoaded = true;
                            } else {
                                $scope.$broadcast('scroll.infiniteScrollComplete');
                                console.log($scope.counter);
                                console.log("false");
                                $scope.model.moreDataCanBeLoaded = false;
                            }
                        }, function error(data) {
                            console.log("Error!");
                        });
                    }
                }
            };

            $scope.doRefresh = function () {
                NewsService.loadRecentArticles.then(function (items) {
                    $scope.model.Articles = items.concat($scope.model.Articles);
                    //Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });
            };
            /* Select Correct Catrgory */

            if (query === 'Recent') {
                $scope.model.Title = 'عاجل';
                NewsService.loadRecentArticles(5).then(function success(data) {
                    $scope.model.Articles = NewsService.RecentArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Arabic') {
                $scope.model.Title = 'عربي';
                NewsService.loadArabicMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.ArabicMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadArabic(1).then(function success(data) {
                    $scope.model.Articles = NewsService.ArabicArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'International') {
                $scope.model.Title = 'دولي';
                NewsService.loadInternationalMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.InternationalMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadInternational(5).then(function success(data) {
                    $scope.model.Articles = NewsService.InternationalArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'UAE') {
                $scope.model.Title = 'الإمارات';
                NewsService.loadUAE(5).then(function success(data) {
                    $scope.model.Articles = NewsService.UAEArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Directions') {
                $scope.model.Title = 'إتجاهات';
                NewsService.loadDirectionsMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.DirectionsMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadDirections(5).then(function success(data) {
                    $scope.model.Articles = NewsService.DirectionsArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Technology') {
                $scope.model.Title = 'تكنولوجيا';
                NewsService.loadTechnologyMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.TechnologyMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadTechnology(5).then(function success(data) {
                    $scope.model.Articles = NewsService.TechnologyArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Health') {
                $scope.model.Title = 'صحة';
                NewsService.loadHealthMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.HealthMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadHealth(5).then(function success(data) {
                    $scope.model.Articles = NewsService.HealthArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Sport') {
                $scope.model.Title = 'ملاعب';
                NewsService.loadSport(5).then(function success(data) {
                    $scope.model.Articles = NewsService.SportArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'LifeStyle') {
                $scope.model.Title = 'لايف ستايل';
                NewsService.loadLifeStyleMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.LifeStyleMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadLifeStyle(5).then(function success(data) {
                    $scope.model.Articles = NewsService.LifeStyleArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Varitiess') {
                $scope.model.Title = 'منوعات';
                NewsService.loadVaritiesMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.VaritiessMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadVarities(5).then(function success(data) {
                    $scope.model.Articles = NewsService.VaritiesArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Business') {
                $scope.model.Title = 'مال وأعمال';
                NewsService.loadBusinessMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.BusinessMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadBusiness(5).then(function success(data) {
                    $scope.model.Articles = NewsService.BusinessArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Culture') {
                $scope.model.Title = 'ثقافة';
                NewsService.loadCultureMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.CultureMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadCulture(5).then(function success(data) {
                    $scope.model.Articles = NewsService.CultureArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Youth') {
                $scope.model.Title = 'شباب';
                NewsService.loadYouthMain().then(function success(data) {
                    $scope.model.MainArticle = NewsService.YouthMain;
                }, function error(data) {
                    console.log("Error!");
                });
                NewsService.loadYouth(5).then(function success(data) {
                    $scope.model.Articles = NewsService.YouthArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Pictures') {
                $scope.model.Title = 'صور';
                NewsService.loadPictures(5).then(function success(data) {
                    $scope.model.Articles = NewsService.Pictures;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Frequent') {
                $scope.model.Title = 'أكثر القراءات';
                NewsService.loadFrequentArticles(5).then(function success(data) {
                    $scope.model.Articles = NewsService.FrequentArticles;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            if (query === 'Videos') {
                $scope.model.Title = 'فيديو';
                NewsService.loadVideos(5).then(function success(data) {
                    $scope.model.Articles = NewsService.Videos;
                }, function error(data) {
                    console.log("Error!");
                });
            }

            $scope.sendData = function (index) {
                // Initialize packed or we get the word 'undefined'
                if (typeof index === 'undefined') {

                } else {
                    window.location = "Article-Detail.html?" + index;
                    console.log(index);
                }
            };
            $scope.goToCategory = function (catID) {
                // Initialize packed or we get the word 'undefined'
                window.location = "category.html?" + catID;
                console.log(catID);
            };
        });
con.controller("MyController", function ($scope, NewsService, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $sce, $state) {

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
    $scope.GoToYoutube = function () {
        window.location = "https://www.youtube.com/user/20fourMedia";
        console.log("Test Youtube");
    };
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


});