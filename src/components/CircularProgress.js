import React from "react";
import PropTypes from "prop-types";

class CircularProgress extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const progress = Math.ceil(this.props.progress);

    const ctx = this.refs.canvas.getContext("2d");
    const cw = ctx.canvas.width / 2;
    const ch = ctx.canvas.height / 2;

    const arcWidth = this.props.showLabel
      ? (this.props.width * 10) / 100
      : (this.props.width * 15) / 100;

    const innerRadius = this.props.width / 2 - arcWidth;
    const radius = (this.props.width - arcWidth) / 2;

    // clear canvas
    ctx.clearRect(0, 0, this.props.width, this.props.width);

    // draw inner circle
    ctx.beginPath();
    ctx.arc(cw, ch, innerRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#FFF";
    ctx.fill();

    // draw progress track
    ctx.beginPath();
    ctx.arc(cw, ch, radius, 0, 2 * Math.PI, false);
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = this.props.color;
    ctx.lineWidth = arcWidth;
    ctx.stroke();
    ctx.globalAlpha = 1;

    if (this.props.showLabel) {
      // write progress text
      const fontSize = (this.props.width * 15) / 100;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${fontSize}pt Verdana`;
      ctx.fillText(progress + "%", cw + 2, ch);
    }

    // draw progress arc
    const deltaAngle = (progress * Math.PI * 2) / 100;
    const startAngle = -Math.PI / 2;
    const endAngle = -(deltaAngle - startAngle);
    ctx.beginPath();
    ctx.arc(cw, ch, radius, startAngle, endAngle, true);
    ctx.strokeStyle = this.props.color;
    ctx.stroke();
  }

  render() {
    return (
      <canvas
        className={this.props.className}
        ref="canvas"
        width={this.props.width}
        height={this.props.width}
      />
    );
  }
}

CircularProgress.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  progress: PropTypes.number.isRequired
};

export default CircularProgress;
