import { useState } from 'react';
import { Button, SelectControl, ColorPalette } from '@wordpress/components';
import { desktop, tablet, link as linkIcon, unlink as unlinkIcon } from '@wordpress/icons';

const mobileIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
  </svg>
);

const deviceOptions = [
  { key: 'desktop', icon: desktop, label: 'Desktop' },
  { key: 'tablet', icon: tablet, label: 'Tablet' },
  { key: 'mobile', icon: mobileIcon, label: 'Mobile' },
];

const borderTypeOptions = [
  { label: 'None', value: 'none' },
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: 'dashed' },
  { label: 'Dotted', value: 'dotted' },
  { label: 'Double', value: 'double' },
  { label: 'Groove', value: 'groove' },
  { label: 'Ridge', value: 'ridge' },
  { label: 'Inset', value: 'inset' },
  { label: 'Outset', value: 'outset' },
];

const minMax = {
  desktop: { min: 0, max: 50 },
  tablet: { min: 0, max: 40 },
  mobile: { min: 0, max: 30 },
};

export default function BorderSettings({ borderWidth, setBorderWidth, borderRadius, setBorderRadius, borderType, setBorderType, borderColor, setBorderColor }) {
  const [device, setDevice] = useState('desktop');
  const [isLinkedWidth, setIsLinkedWidth] = useState(true);
  const [isLinkedRadius, setIsLinkedRadius] = useState(true);

  // Helper to ensure object format
  const ensureBorderObject = (borderData, device) => {
    if (!borderData || !borderData[device]) {
      return { top: 0, right: 0, bottom: 0, left: 0 };
    }
    const deviceData = borderData[device];
    if (typeof deviceData === 'number') {
      return { top: deviceData, right: deviceData, bottom: deviceData, left: deviceData };
    }
    if (typeof deviceData === 'object') {
      return {
        top: deviceData.top ?? 0,
        right: deviceData.right ?? 0,
        bottom: deviceData.bottom ?? 0,
        left: deviceData.left ?? 0
      };
    }
    return { top: 0, right: 0, bottom: 0, left: 0 };
  };

  // Border Width Handlers
  const currentBorderWidth = ensureBorderObject(borderWidth, device);
  const handleBorderWidthChange = (side, value) => {
    let val = Number(value) || 0;
    let newBorderWidth = { ...borderWidth };
    let obj = { ...currentBorderWidth };
    if (isLinkedWidth) {
      obj = { top: val, right: val, bottom: val, left: val };
    } else {
      obj[side] = val;
    }
    newBorderWidth[device] = obj;
    setBorderWidth(newBorderWidth);
  };

  // Border Radius Handlers
  const currentBorderRadius = ensureBorderObject(borderRadius, device);
  const handleBorderRadiusChange = (side, value) => {
    let val = Number(value) || 0;
    let newBorderRadius = { ...borderRadius };
    let obj = { ...currentBorderRadius };
    if (isLinkedRadius) {
      obj = { top: val, right: val, bottom: val, left: val };
    } else {
      obj[side] = val;
    }
    newBorderRadius[device] = obj;
    setBorderRadius(newBorderRadius);
  };

  const handleBorderTypeChange = (value) => {
    setBorderType({ ...borderType, [device]: value });
    if (value === 'none') {
      let newBorderWidth = { ...borderWidth };
      newBorderWidth[device] = { top: 0, right: 0, bottom: 0, left: 0 };
      setBorderWidth(newBorderWidth);
    }
  };
  const handleBorderColorChange = (value) => {
    setBorderColor({ ...borderColor, [device]: value });
  };
  const showBorderColor = borderType[device] && borderType[device] !== 'none';
  const isBorderTypeNone = borderType[device] === 'none';

  // Layout for Elementor-style controls
  const renderFourInputRow = (obj, onChange, isLinked, setIsLinked, disabled = false) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden' }}>
        {['top', 'right', 'bottom', 'left'].map((side, idx) => (
          <input
            key={side}
            type="number"
            min={minMax[device].min}
            max={minMax[device].max}
            value={obj[side]}
            onChange={e => onChange(side, e.target.value)}
            style={{
              width: 48,
              border: 'none',
              borderRight: idx < 3 ? '1px solid #ddd' : 'none',
              outline: 'none',
              textAlign: 'center',
              background: disabled ? '#f7f7f7' : 'white',
              color: disabled ? '#aaa' : 'inherit',
              fontWeight: 500,
              fontSize: 14,
              height: 36,
              pointerEvents: disabled ? 'none' : 'auto',
            }}
            disabled={disabled}
          />
        ))}
        <Button
          isSmall
          icon={isLinked ? linkIcon : unlinkIcon}
          label={isLinked ? 'Unlink values' : 'Link values'}
          onClick={() => setIsLinked(!isLinked)}
          style={{
            borderRadius: 0,
            borderLeft: '1px solid #ddd',
            background: isLinked ? '#0057d8' : '#f7f7f7',
            color: isLinked ? 'white' : '#333',
            height: 36,
            width: 36,
            marginLeft: 0,
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 12, color: '#555' }}>
        <span style={{ width: 48, textAlign: 'center' }}>Top</span>
        <span style={{ width: 48, textAlign: 'center' }}>Right</span>
        <span style={{ width: 48, textAlign: 'center' }}>Bottom</span>
        <span style={{ width: 48, textAlign: 'center' }}>Left</span>
        <span style={{ width: 36 }}></span>
      </div>
    </>
  );

  return (
    <div style={{ marginBottom: 24 }}>
      <div className='gmfgb-mg-border-setting' style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {deviceOptions.map(({ key, icon, label }) => (
          <Button
            key={key}
            isPrimary={device === key}
            icon={icon}
            label={label}
            onClick={() => setDevice(key)}
            style={{ padding: 4 }}
          />
        ))}
      </div>
      {/* Border Type Control */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>
          Border Type
        </label>
        <SelectControl
          value={borderType[device]}
          options={borderTypeOptions}
          onChange={handleBorderTypeChange}
        />
      </div>
      {/* Border Color Control - Only show when border type is not 'none' */}
      {showBorderColor && (
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>
            Border Color
          </label>
          <ColorPalette
            value={borderColor[device]}
            onChange={handleBorderColorChange}
            enableAlpha
            colors={[
              { name: 'Black', color: '#000000' },
              { name: 'White', color: '#ffffff' },
              { name: 'Red', color: '#ff0000' },
              { name: 'Blue', color: '#0057d8' },
              { name: 'Green', color: '#00c853' },
              { name: 'Gray', color: '#888888' },
              { name: 'Yellow', color: '#ffe600' },
              { name: 'Purple', color: '#a259e6' },
            ]}
          />
        </div>
      )}
      {/* Border Width Control */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 500, marginBottom: 8, display: 'block', opacity: isBorderTypeNone ? 0.5 : 1 }}>
          Border Width
        </label>
        {renderFourInputRow(currentBorderWidth, handleBorderWidthChange, isLinkedWidth, setIsLinkedWidth, isBorderTypeNone)}
      </div>
      {/* Border Radius Control */}
      <div>
        <label style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
          Border Radius
        </label>
        {renderFourInputRow(currentBorderRadius, handleBorderRadiusChange, isLinkedRadius, setIsLinkedRadius)}
      </div>
    </div>
  );
} 