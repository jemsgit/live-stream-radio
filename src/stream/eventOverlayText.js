// Overlay text for the stream
const safeStrings = require('./safeStrings');

const getEventOverlayTextString = async (path, config, typeKey, eventType, eventValue) => {
  // Create our overlay
  // Note: Positions and sizes are done relative to the input video width and height
  // Therefore position x/y is a percentage, like CSS style.
  // Font size is simply just a fraction of the width

  let itemObject = config[typeKey][eventType];
  console.log(itemObject.font_size);
  const time = itemObject.time_start;
  const timeEnd = itemObject.time_end;
  let text = `${itemObject.label}${eventValue}`;
  const safeText = safeStrings.forFilter(text);
  const fontPath = `${path}${itemObject.font_path}`;

  let result = `drawtext=text='${safeText}':fontfile=${fontPath}:fontsize=(w * ${itemObject.font_size / 300}):fontcolor=${
    itemObject.font_color
  }:x=(w-text_w)/2:y=(h-text_h+100)/2:enable='between(t,${time},${timeEnd})'`;
  return result;
};

module.exports = getEventOverlayTextString;
