export class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  add(v) {
    if (v instanceof Vector) {
			this.x += v.x;
			this.y += v.y;
		} else {
			this.x += v;
			this.y += v;
		}
    return this;
  }

  substract(v) {
    if (v instanceof Vector) {
			this.x -= v.x;
			this.y -= v.y;
		} else {
			this.x -= v;
			this.y -= v;
		}
    return this;
  }

  multiply(v) {
    if (v instanceof Vector) {
			this.x *= v.x;
			this.y *= v.y;
		} else {
			this.x *= v;
			this.y *= v;
		}
    return this;
  }

  divide(v) {
    if (v instanceof Vector) {
			if (v.x !== 0) this.x /= v.x;
			if (v.y !== 0) this.y /= v.y;
		} else {
			if(v !== 0) {
				this.x /= v;
				this.y /= v;
			}
		}
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.x - this.y * v.y;
  }

  min() {
    return Math.min(this.x, this.y);
  }

  max() {
    return Math.max(this.x, this.y);
  }

  mag() {
    return Math.sqrt(this.dot(this));
  }

  normalize() {
    let m = this.mag();
    if (m > 0) return this.divide(m);
  }

  scale(s) {
    this.normalize();
  }

  limit(limit) {
    this.x = (Math.abs(this.x) > limit) ? ((Math.sign(this.x) > 0) ? limit : -limit) : this.x;
    this.y = (Math.abs(this.y) > limit) ? ((Math.sign(this.y) > 0) ? limit : -limit) : this.y;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  /*******************
  * Static Methods
  *******************/
  static add(a, b) {
    if (b instanceof Vector) return new Vector(a.x + b.x, a.y + b.y);
    else return new Vector(a.x + b, a.y + b);
  }

  static substract(a, b) {
    if (b instanceof Vector) return new Vector(a.x - b.x, a.y - b.y);
    else return new Vector(a.x - b, a.y - b);
  }

  static multiply(a, b) {
    if (b instanceof Vector) return new Vector(a.x * b.x, a.y * b.y);
    else return new Vector(a.x * b, a.y * b);
  }

  static divide(a, b) {
    if (b instanceof Vector) return new Vector(a.x / b.x, a.y / b.y);
    else return new Vector(a.x / b, a.y / b);
  }

}
