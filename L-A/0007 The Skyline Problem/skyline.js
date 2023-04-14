class Heap {
  constructor(compareFunc) {
    this.compare = compareFunc || ((a, b) => a - b);
    this.elements = [];
  }

  get size() {
    return this.elements.length;
  }

  get top() {
    return this.elements[0];
  }

  push(element) {
    this.elements.push(element);
    this.heapifyUp();
  }

  pop() {
    const top = this.elements[0];
    const bottom = this.elements.pop();
    if (this.elements.length > 0) {
      this.elements[0] = bottom;
      this.heapifyDown();
    }
    return top;
  }

  heapifyUp() {
    let current = this.elements.length - 1;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.compare(this.elements[current], this.elements[parent]) < 0) {
        [this.elements[current], this.elements[parent]] = [this.elements[parent], this.elements[current]];
        current = parent;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let current = 0;
    while (current < this.elements.length) {
      let child = null;
      const left = current * 2 + 1;
      const right = current * 2 + 2;
      if (left < this.elements.length && this.compare(this.elements[left], this.elements[current]) < 0) {
        child = left;
      }
      if (right < this.elements.length && this.compare(this.elements[right], this.elements[current]) < 0
          && this.compare(this.elements[right], this.elements[left]) < 0) {
        child = right;
      }
      if (child !== null) {
        [this.elements[current], this.elements[child]] = [this.elements[child], this.elements[current]];
        current = child;
      } else {
        break;
      }
    }
  }
}

function getSkyline(buildings) {
  const n = buildings.length;
  const criticalPoints = new Heap((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]);
  for (let i = 0; i < n; i++) {
    const [left, right, height] = buildings[i];
    criticalPoints.push([left, -height, i]);
    criticalPoints.push([right, height, i]);
  }
  const activeBuildings = new Heap((a, b) => b[1] - a[1]);
  const skyline = [[0, 0]];
  while (criticalPoints.size > 0) {
    const [x, h, i] = criticalPoints.top;
    const isStart = h < 0;
    const height = Math.abs(h);
    if (isStart) {
      activeBuildings.push([buildings[i][2], buildings[i][1]]);
    } else {
      activeBuildings.elements.forEach(([ah, ar], j) => {
        if (j === i) {
          activeBuildings.elements[j] = activeBuildings.elements[activeBuildings.size - 1];
          activeBuildings.elements.pop();
          activeBuildings.heapifyDown();
          return;
        }
        if (ar > buildings[i][0]) {
          skyline.push([x, Math.min(height, ah)]);
          if (ar > buildings[i][1]) {
            activeBuildings.elements[j][1] = buildings[i][1];
            activeBuildings.heapifyDown();
          }
        }
    });
