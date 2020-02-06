const AccessControl = require('accesscontrol');

const useGrants = (grants) => {
  const ac = new AccessControl(grants);

  const capitalize = str => str[0].toUpperCase() + str.substr(1).toLowerCase();

  const canAccess = role => (resource, action, possession='any') => (
    ac.can(role)[`${action}${capitalize(possession)}`](resource).granted
  );

  return canAccess;
};

module.exports = useGrants;
