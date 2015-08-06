/**
 * Created by tim on 8/1/15.
 */

var mainApp = angular.module('app-core', ['n3-line-chart']).
    controller('StandardController', function ($scope, $location) {
        $scope.page = $location.$$path;
        $scope.$on('$locationChangeStart', function(event) {
            $scope.page = $location.$$path;
            console.log($location.$$path);
        });
    }).
    controller('AllSales', function($scope, $http) {
        $scope.data = [];
        $scope.options = {
            axes: {
                x: {type: 'date'}
            },
            lineMode: "cardinal",
            series: [
                {
                    y: "val",
                    label: "Sales Dollars",
                    type: "area",
                    striped: true,
                    dotSize: 3
                }
            ]
        };

        $http.get('restapi.php?cmd=all_sales').then(function(fetch_data) {
            $scope.data = fetch_data.data;
            $scope.data.forEach(function(row) {
                row.x = new Date(row.x);
            });
        });
    }).
    controller('WeeklySales', function($scope, $http) {
        $scope.data = [];
        $scope.options = {
            axes: {
                x: {
                    type: 'date',
                    ticksFormatter: function(tick) {
                        var d = new Date(tick);
                        var weekday = new Array(7);
                        weekday[0] = 'Mon';
                        weekday[1] = 'Tue';
                        weekday[2] = 'Wed';
                        weekday[3] = 'Thu';
                        weekday[4] = 'Fri';
                        weekday[5] = 'Sat';
                        weekday[6] = 'Sun';

                        return weekday[d.getDay()];
                    }
                }
            },
            lineMode: "cardinal",
            series: [
                {
                    y: "val_0",
                    label: "This week",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_1",
                    label: "Last week",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_2",
                    label: "2 weeks ago",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_3",
                    label: "3 weeks ago",
                    type: "area",
                    striped: true,
                    dotSize: 3
                }
            ]
        };

        $http.get('restapi.php?cmd=weekly_sales').then(function(fetch_data) {
            $scope.data = fetch_data.data;
            $scope.data.forEach(function(row) {
                row.x = new Date(row.x);
            });
        });
    }).
    controller('TopCustomerSales', function($scope, $http) {
        $scope.data = [];
        $scope.options = {
            axes: {
                x: {
                    type: 'date'
                }
            },
            lineMode: "cardinal",
            series: [
                {
                    y: "val_0",
                    label: function(value) {
                        var this_y = value.y.match(/\d+/)[0];
                        var this_label = 'label_' + this_y;
                        var computed_label = "";
                        $scope.data.forEach(function(row) {
                            if (row[this_label] != undefined) {
                                computed_label = row[this_label];
                            }
                        });
                        return computed_label;
                    },
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_1",
                    label: function(value) {
                        var this_y = value.y.match(/\d+/)[0];
                        var this_label = 'label_' + this_y;
                        var computed_label = "";
                        $scope.data.forEach(function(row) {
                            if (row[this_label] != undefined) {
                                computed_label = row[this_label];
                            }
                        });
                        return computed_label;
                    },
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_2",
                    label: function(value) {
                        var this_y = value.y.match(/\d+/)[0];
                        var this_label = 'label_' + this_y;
                        var computed_label = "";
                        $scope.data.forEach(function(row) {
                            if (row[this_label] != undefined) {
                                computed_label = row[this_label];
                            }
                        });
                        return computed_label;
                    },
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_3",
                    label: function(value) {
                        var this_y = value.y.match(/\d+/)[0];
                        var this_label = 'label_' + this_y;
                        var computed_label = "";
                        $scope.data.forEach(function(row) {
                            if (row[this_label] != undefined) {
                                computed_label = row[this_label];
                            }
                        });
                        return computed_label;
                    },
                    type: "area",
                    striped: true,
                    dotSize: 3
                }
            ]
        };

        $http.get('restapi.php?cmd=top_customer_sales').then(function(fetch_data) {
            $scope.data = fetch_data.data;
            $scope.data.forEach(function(row) {
                row.x = new Date(row.x);
            });
        });
    }).
    controller('TransactionMetrics', function($scope, $http) {
        $scope.data = [];
        $scope.options = {
            axes: {
                x: {type: 'date'}
            },
            lineMode: "cardinal",
            series: [
                {
                    y: "total",
                    label: "Total sales",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "declines",
                    label: "Declines",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "approvals",
                    label: "Approvals",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "pending",
                    label: "Pending sales",
                    type: "area",
                    striped: true,
                    dotSize: 3
                }
            ]
        };

        $http.get('restapi.php?cmd=transaction_metrics').then(function(fetch_data) {
            $scope.data = fetch_data.data;
            $scope.data.forEach(function(row) {
                row.x = new Date(row.x);
            });
        });
    }).
    controller('ServerSales', function($scope, $http) {
        $scope.data = [];
        $scope.options = {
            axes: {
                x: {type: 'date'}
            },
            lineMode: "cardinal",
            series: [
                {
                    y: "val_0",
                    type: "area",
                    striped: true,
                    dotSize: 3
                },
                {
                    y: "val_1",
                    type: "area",
                    striped: true,
                    dotSize: 3
                }
            ]
        };

        $http.get('restapi.php?cmd=server_sales').then(function(fetch_data) {
            $scope.data = fetch_data.data;
        });
    }).
    controller('TestData', function($scope) {
    }).
    controller('DebugController', function($scope) {
        $scope.dataz = '';
        $scope.muri = window.location;
    });
