import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookHistory, setBookHistory] = useState([]);

  // Dummy fetch simulation
  useEffect(() => {
    // Replace with actual API calls
    setIssuedBooks([
      { id: 1, title: 'JavaScript Basics', dueDate: '2025-08-01' },
      { id: 2, title: 'React in Action', dueDate: '2025-08-05' },
    ]);

    setBookHistory([
      { id: 1, title: 'HTML & CSS', returnedOn: '2025-07-01' },
    ]);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Student Library Dashboard</h1>

      {/* Search Section */}
      <div style={styles.section}>
        <h2>Search Books</h2>
        <input
          type="text"
          placeholder="Search by title, author, etc..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Issued Books */}
      <div style={styles.section}>
        <h2>My Issued Books</h2>
        {issuedBooks.length === 0 ? (
          <p>No books issued.</p>
        ) : (
          <ul>
            {issuedBooks.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> - Due on {book.dueDate}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Book History */}
      <div style={styles.section}>
        <h2>Book History</h2>
        {bookHistory.length === 0 ? (
          <p>No previous book returns.</p>
        ) : (
          <ul>
            {bookHistory.map((book) => (
              <li key={book.id}>
                {book.title} - Returned on {book.returnedOn}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button style={styles.logoutButton} onClick={() => alert('Logging out...')}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    color: '#4a90e2',
  },
  section: {
    marginBottom: '2rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  input: {
    padding: '0.5rem',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  logoutButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default StudentDashboard;
