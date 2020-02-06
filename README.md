# use-accesscontrol-grants
Easily authorize roles based on [accesscontrol](https://github.com/onury/accesscontrol) grants.

# Usage
```js
import useGrants from 'use-accesscontrol-grants';

const canAccess = useGrants(YOUR_GRANTS_LIST);
const canUserAccess = canAccess('user');
const canAdminAccess = canAccess('admin');

if (canUserAccess('video', 'read', 'any')) {
  console.log('user can view any video');
}

if (canAdminAccess('video', 'read', 'any')) {
  console.log('admin can view any video');
}

```

Happy coding!
