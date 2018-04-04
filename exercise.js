var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------

    var x_dist = (p1.x - p2.x);
    var y_dist = (p1.y - p2.y);

    var dist = Math.sqrt(Math.pow(y_dist, 2) + Math.pow(x_dist, 2));

    return dist;
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------

    data.forEach(distancer);

    function distancer(point){
        point.distance = exercise.distance(newPoint, point);
    }
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //-------------------

    var closest = [];

    data.sort(compare);

    function compare(a, b){
        return a.distance-b.distance;
    }

    for (var i = 0; i<k ; i++){
        closest[i] = data[i];
    }
    return closest;
};

module.exports = exercise;
