function CircularArc(r, theta) {
    let thetaRad = theta * (Math.PI / 180); 
    return thetaRad * r;
}

CircularArc(10, 45); // Change these numbers