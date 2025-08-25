import { useState } from 'react';
import { Button, SelectControl, ColorPalette } from '@wordpress/components';
import { link as linkIcon, linkOff as unlinkIcon } from '@wordpress/icons';

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

const minMax = { min: 0, max: 50 };

export default function BorderSettings({ borderWidth, setBorderWidth, borderRadius, setBorderRadius, borderType, setBorderType, borderColor, setBorderColor }) {
  const [isLinkedWidth, setIsLinkedWidth] = useState(true);
  const [isLinkedRadius, setIsLinkedRadius] = useState(true);

  // Helper to ensure object format
  const ensureBorderObject = (borderData) => {
    if (!borderData) {
      return { top: 0, right: 0, bottom: 0, left: 0 };
    }
    if (typeof borderData === 'number') {
      return { top: borderData, right: borderData, bottom: borderData, left: borderData };
    }
    if (typeof borderData === 'object') {
      return {
        top: borderData.top ?? 0,
        right: borderData.right ?? 0,
        bottom: borderData.bottom ?? 0,
        left: borderData.left ?? 0
      };
    }
    return { top: 0, right: 0, bottom: 0, left: 0 };
  };

  // Border Width Handlers
  const currentBorderWidth = ensureBorderObject(borderWidth);
  const handleBorderWidthChange = (side, value) => {
    let val = Number(value) || 0;
    
    // Validate against min/max limits
    if (val < minMax.min) val = minMax.min;
    if (val > minMax.max) val = minMax.max;
    
    let newBorderWidth = { ...currentBorderWidth };
    if (isLinkedWidth) {
      newBorderWidth = { top: val, right: val, bottom: val, left: val };
    } else {
      newBorderWidth[side] = val;
    }
    setBorderWidth(newBorderWidth);
  };

  // Border Radius Handlers
  const currentBorderRadius = ensureBorderObject(borderRadius);
  const handleBorderRadiusChange = (side, value) => {
    let val = Number(value) || 0;
    
    // Validate against min/max limits
    if (val < minMax.min) val = minMax.min;
    if (val > minMax.max) val = minMax.max;
    
    let newBorderRadius = { ...currentBorderRadius };
    if (isLinkedRadius) {
      newBorderRadius = { top: val, right: val, bottom: val, left: val };
    } else {
      newBorderRadius[side] = val;
    }
    setBorderRadius(newBorderRadius);
  };

  const handleBorderTypeChange = (value) => {
    setBorderType(value);
    if (value === 'none') {
      setBorderWidth({ top: 0, right: 0, bottom: 0, left: 0 });
    }
  };
  
  const handleBorderColorChange = (value) => {
    setBorderColor(value);
  };
  
  const showBorderColor = borderType && borderType !== 'none';
  const isBorderTypeNone = borderType === 'none';

  // Layout for Elementor-style controls
  const renderFourInputRow = (obj, onChange, isLinked, setIsLinked, disabled = false, settingType = '') => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden' }}>
        {['top', 'right', 'bottom', 'left'].map((side, idx) => (
          <input
            key={side}
            type="number"
            min={minMax.min}
            max={minMax.max}
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
      {/* PX Label for current values */}
      <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
        {settingType}: {isLinked ? `${obj.top}px` : `${obj.top}px, ${obj.right}px, ${obj.bottom}px, ${obj.left}px`}
      </div>
    </>
  );

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Border Type Control */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>
          Border Type
        </label>
        <SelectControl
          value={borderType}
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
            value={borderColor}
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
        {renderFourInputRow(currentBorderWidth, handleBorderWidthChange, isLinkedWidth, setIsLinkedWidth, isBorderTypeNone, 'Border Width')}
      </div>
      {/* Border Radius Control */}
      <div>
        <label style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
          Border Radius
        </label>
        {renderFourInputRow(currentBorderRadius, handleBorderRadiusChange, isLinkedRadius, setIsLinkedRadius, false, 'Border Radius')}
      </div>
    </div>
  );
} 