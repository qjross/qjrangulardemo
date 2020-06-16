app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = '2018 Southwestern 2A Football Standings';
    $scope.playoff = '';
    $scope.teams = [
        {
            name: 'Shelby',
            confRecord: '5-0',
            confWinPct: 1.000,
            confPF: 225,
            confPA: 46,
            overallRecord: '13-3',
            overallWinPct: .812,
            overallPF: 530,
            overallPA: 263
    
    
        },
    {
            name: 'South Point',
            confRecord: '4-1',
            confWinPct: .800,
            confPF: 200,
            confPA: 71,
            overallRecord: '9-4',
            overallWinPct: .692,
            overallPF: 447,
            overallPA: 212
    
        },
    
    {
            name: 'E. Rutherford',
            confRecord: '3-2',
            confWinPct: .600,
            confPF: 187,
            confPA: 86,
            overallRecord: '10-3',
            overallWinPct: .769,
            overallPF: 508,
            overallPA: 284
    
        },
    {
            name: 'Chase',
            confRecord: '2-3',
            confWinPct: .400,
            confPF: 89,
            confPA: 186,
            overallRecord: '4-7',
            overallWinPct: .364,
            overallPF: 225,
            overallPA: 360
    
    },
    {
            name: 'R-S Central',
            confRecord: '1-4',
            confWinPct: .200,
            confPF: 62,
            confPA: 201,
            overallRecord: '2-9',
            overallWinPct: .182,
            overallPF: 134,
            overallPA: 388
    
    },
    
    {
            name: 'East Gaston',
            confRecord: '0-5',
            confWinPct: .000,
            confPF: 20,
            confPA: 193,
            overallRecord: '0-11',
            overallWinPct: .000,
            overallPF: 89,
            overallPA: 487
        }
   ];    

}]);