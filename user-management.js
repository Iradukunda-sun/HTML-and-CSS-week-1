//user management screen javascript
let users = [
  { id: 1, username: 'johnDoe', role: 'Admin' },
  { id: 2, username: 'janeDoe', role: 'User' },
  // Add more users as needed
];

// Function to display users
function displayUsers() {
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  users.forEach(user => {
      let row = document.createElement('tr');
      row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.role}</td>
          <td>
              <button class="btn btn-sm btn-primary" onclick="editUser(${user.id})">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">Delete</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
}

// Function to show add user modal
function showAddUserModal() {
  document.getElementById('userForm').reset();
  document.getElementById('userId').value = '';
  $('#userModal').modal('show');
}

// Function to edit user
function editUser(id) {
  let user = users.find(u => u.id === id);}
  if (user) {
      document.getElementById('username').value = user.username;
      document.getElementById('role').value}