var serv = angular.module('app.service', []);

serv.service("NewsService", function ($http, $q, $ionicPopup) {
    var self = {
        'Domain': 'http://24ae.sdg.ae/_MobServices/CLS_MobServices.asmx',
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
        'VideoDetail':[],
        'PublishMainVideoInChannel':[],
        'PublishVideosByChannelId':[],
        'Article': [],
        'RelatedArticles': [],
        'SearchedArticles': [],
        'replace': function (str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }
        ,
        'loadRecentArticles': function (count) {
            var d = $q.defer();
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetScrollArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=" + count)
                    .success(function success(data) {
                        //  data = data.split('~').join('http://24.ae');
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.RecentArticles = NewArray;
                        console.log(self.RecentArticles);
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
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetMostRead&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=15")
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.FrequentArticles = NewArray;
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
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetArabicArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=" + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.ArabicArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetArabicMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.ArabicMain = NewArray;
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
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetBusinessArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=" + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.BusinessArticles = NewArray;
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
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetBusinessMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword")
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.BusinessMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetHealthArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.HealthArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetHealthMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.HealthMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetCultureArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.CultureArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetCultureMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.CultureMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetDirectionsArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.DirectionsArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetDirectionsMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.DirectionsMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetInternationalArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.InternationalArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetInternationalMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.InternationalMain = NewArray;
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
            $http.get("http://24.ae/_MobService/CLS_MobServices.aspx?function=GetLifeStyleArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=" + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.LifeStyleArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetLifeStyleMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.LifeStyleMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetTechnologyArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.TechnologyArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetTechnologyMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.TechnologyMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetVaritiesArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.VaritiesArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetVaritiesMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.VaritiessMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetYouthArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.YouthArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetYouthMainArticle&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.YouthMain = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetScrollArticlesForSport&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.SportArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetScrollArticlesForUAE&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.UAEArticles = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetPictures&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('24.ae').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.Pictures = NewArray;
                        console.log("loadVarities (OK)");
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadVideos': function (ArticleNo) {
            var d = $q.defer();
            $http.get('http://video.24.ae/_MobService/CLS_MobServices.aspx?function=Get24Videos&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + ArticleNo)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://video.24.ae');
                        var NewArray = JSON.parse(old);
                        self.Videos = NewArray;
                        console.log(self.Videos);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadVideo': function (id) {
            var d = $q.defer();
            $http.get('http://video.24.ae/_MobService/CLS_MobServices.aspx?function=GetVideoDetails&VideoId='+ id + '&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('video.24.ae').join('http://video.24.ae');
                        old = old.split('watch?v=').join('embed/');
                        var NewArray = JSON.parse(old);
                        self.VideoDetail = NewArray;
                        console.log(self.VideoDetail);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadPublishMainVideoInChannel': function (id) {
            var d = $q.defer();
            $http.get('http://video.24.ae/_MobService/CLS_MobServices.aspx?function=GetPublishMainVideoInChannel&ChannelId='+ id + '&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://video.24.ae');
                       // old = old.split('/mobile').join('http://24.ae/mobile');
                        var NewArray = JSON.parse(old);
                        self.PublishMainVideoInChannel = NewArray;
                        console.log(self.PublishMainVideoInChannel);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadPublishVideosByChannelId': function (ChannelId,NumberOfItems) {
            var d = $q.defer();
            $http.get('http://video.24.ae/_MobService/CLS_MobServices.aspx?function=GetPublishVideosByChannelId&ChannelId='+ ChannelId + '&NumberOfItems='+ NumberOfItems + '&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://video.24.ae');
                       // old = old.split('/mobile').join('http://24.ae/mobile');
                        var NewArray = JSON.parse(old);
                        self.PublishVideosByChannelId = NewArray;
                        console.log(self.PublishVideosByChannelId);
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetArticleDetails&ArticleId='+ id + '&username=24AEMobAdmin&password=24AeMobP@ssword')
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('24.ae').join('http://24.ae');
//                        old = old.split('/mobile').join('http://24.ae/mobile');
                        var NewArray = JSON.parse(old);
                        self.Article = NewArray;
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
            $http.get('http://24.ae/_MobService/CLS_MobServices.aspx?function=GetRelatedArticles&username=24AEMobAdmin&password=24AeMobP@ssword&NumberOfItems=' + NumberOfItems + "&SectionId=" + SectionId + "&ArticleId=" + ArticleId)
                    .success(function success(data) {
                        var old = JSON.stringify(data).split('~').join('http://24.ae');
                        var NewArray = JSON.parse(old);
                        self.RelatedArticles = NewArray;
                        console.log(self.RelatedArticles);
                        d.resolve();
                    })
                    .error(function error(msg) {
                        console.log(msg);
                        d.reject();
                    });
            return d.promise;
        },
        'loadSearchArticles': function (title, date, sectionId, NumberOfItems) {
            var d = $q.defer();
            if (typeof title === 'undefined') {

            } else if (typeof date === 'undefined') {
                $http.get(self.Domain + "/SearchArticles?title=" + title + "&date=&sectionId=" + sectionId + "&NumberOfItems=" + NumberOfItems)
                        .success(function success(data) {
                            var old = JSON.stringify(data).split('~').join('http://24.ae');
                            var NewArray = JSON.parse(old);
                            self.SearchedArticles = JSON.parse(data);
                            console.log(self.SearchedArticles);
                            d.resolve();
                        })
                        .error(function error(msg) {
                            console.log(msg);
                            d.reject();
                        });
            } else {
                $http.get(self.Domain + "/SearchArticles?title=" + title + "&date=" + date + "&sectionId=" + sectionId + "&NumberOfItems=" + NumberOfItems)
                        .success(function success(data) {
                            var old = JSON.stringify(data).split('~').join('http://24.ae');
                            var NewArray = JSON.parse(old);
                            self.SearchedArticles = JSON.parse(data);
                            console.log(self.SearchedArticles);
                            d.resolve();
                        })
                        .error(function error(msg) {
                            console.log(msg);
                            d.reject();
                        });
            }
            return d.promise;
        }
    };
    return self;

});