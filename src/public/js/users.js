console.log("Users frontend javascript file");

document.querySelectorAll('.member-status').forEach(function (select) {
  select.addEventListener('change', function () {
    const _id = this.id;
    const memberStatus = this.value;

    fetch('/admin/user/edit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: _id, memberStatus: memberStatus }),
    })
      .then(function (res) {
        if (!res.ok) {
          alert('Status update failed!');
        }
      })
      .catch(function (err) {
        console.error('Error:', err);
        alert('Something went wrong!');
      });
  });
});
