const mapping = ['access-nav', 'site-header'];

const zIndex = (key: string) =>
    mapping.includes(key) ? mapping.indexOf(key) + 1 : 0;

export default zIndex;