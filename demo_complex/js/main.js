/// <reference path="angularjs/angular.d.ts" />
var demo;
(function (demo) {
    var css3;
    (function (css3) {
        /** プルダウンの一覧 */
        var PULLDOWN_LIST = [
            { isDivider: false, label: "通常", data: "normal" },
            { isDivider: true, label: "", data: "" },
            { isDivider: false, label: "比較(暗)", data: "darken" },
            { isDivider: false, label: "乗算", data: "multiply" },
            { isDivider: false, label: "焼き込み", data: "color-burn" },
            { isDivider: true, label: "", data: "" },
            { isDivider: false, label: "比較(明)", data: "lighten" },
            { isDivider: false, label: "スクリーン", data: "screen" },
            { isDivider: false, label: "覆い焼き", data: "color-dodge" },
            { isDivider: true, label: "", data: "" },
            { isDivider: false, label: "オーバーレイ", data: "overlay" },
            { isDivider: false, label: "ソフトライト", data: "soft-light" },
            { isDivider: false, label: "ハードライト", data: "hard-light" },
            { isDivider: true, label: "", data: "" },
            { isDivider: false, label: "差の絶対値", data: "difference" },
            { isDivider: false, label: "除外", data: "exclusion" },
            { isDivider: true, label: "", data: "" },
            { isDivider: false, label: "色相", data: "hue" },
            { isDivider: false, label: "彩度", data: "saturation" },
            { isDivider: false, label: "カラー", data: "color" },
            { isDivider: false, label: "輝度", data: "luminosity" },
        ];
        // AngularJS のアプリケーションインスタンス
        var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
        // ----------------------------------
        // 全体の制御
        // ----------------------------------
        app.controller("MyAppCtrl", function ($scope, $log) {
            $scope.currentBlendMode = "normal";
            $scope.change = function (item) {
                $scope.currentBlendMode = item.data;
            };
        });
        // ----------------------------------
        // カルーセルの制御
        // ----------------------------------
        app.controller('CarouselDemoCtrl', function ($scope) {
            $scope.myInterval = 0;
            var slides = $scope.slides = [];
            $scope.addSlide = function () {
                var newWidth = slides.length;
                slides.push({
                    image: 'imgs/bg_' + newWidth + '.jpg',
                });
            };
            for (var i = 0; i < 5; i++) {
                $scope.addSlide();
            }
        });
        // ----------------------------------
        // ドロップダウンメニューの制御
        // ----------------------------------
        app.controller('DropdownCtrl', function ($scope, $log) {
            $scope.items = PULLDOWN_LIST;
            // 初期値
            $scope.currentLabel = "" + $scope.items[0].label + " (" + $scope.items[0].data + ")";
            $scope.status = {
                isopen: true
            };
            // イベントハンドラー
            $scope.toggleDropdown = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };
            $scope.setAction = function (item) {
                $scope.change(item);
                $scope.currentLabel = "" + item.label + " (" + item.data + ")";
                $scope.status.currentLabel = item.label;
            };
        });
    })(css3 = demo.css3 || (demo.css3 = {}));
})(demo || (demo = {}));
//# sourceMappingURL=main.js.map