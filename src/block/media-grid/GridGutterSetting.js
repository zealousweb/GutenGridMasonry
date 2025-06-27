import { useState } from 'react';
import { Button } from '@wordpress/components';
import { desktop, tablet } from '@wordpress/icons';

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

const minMax = {
  desktop: { min: 0, max: 100 },
  tablet: { min: 0, max: 80 },
  mobile: { min: 0, max: 60 },
};

export default function GridGutterSetting({ gutter, setGutter }) {
  const [device, setDevice] = useState('desktop');

  const handleChange = (value) => {
    setGutter({ ...gutter, [device]: Number(value) });
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>
        Items Gutter
      </label>
      <div className='gmfgb-mg-gutter-setting' style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="range"
          min={minMax[device].min}
          max={minMax[device].max}
          value={gutter[device]}
          onChange={e => handleChange(e.target.value)}
          style={{ flex: 1 }}
        />
        <input
          type="number"
          min={minMax[device].min}
          max={minMax[device].max}
          value={gutter[device]}
          onChange={e => handleChange(e.target.value)}
          style={{ width: 48, textAlign: 'center' }}
        />
      </div>
      <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
        {deviceOptions.find(opt => opt.key === device).label} Gutter: {gutter[device]}px
      </div>
    </div>
  );
} 