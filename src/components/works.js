import React, { useState } from 'react';

const Works = ({ userRole, searchText }) => {
  const [works, setWorks] = useState([
    { id: 1, title: 'Work 1', description: 'Description for Work 1', isChecked: false },
    { id: 2, title: 'Work 2', description: 'Description for Work 2', isChecked: true },
    { id: 3, title: 'Work 3', description: 'Description for Work 3', isChecked: false },
  ]);

  const handleAddWork = () => {
    const newWork = {
      id: Date.now(), // Unique identifier for each work
      title: `Work ${works.length + 1}`,
      description: '',
      isChecked: false,
    };

    setWorks([...works, newWork]);
  };

  const toggleExpand = (id) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          isExpanded: !work.isExpanded,
        };
      }
      return work;
    }));
  };

  const handleCheckboxChange = (id) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          isChecked: !work.isChecked,
        };
      }
      return work;
    }));
  };

  const handleDescriptionChange = (id, value) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          description: value,
        };
      }
      return work;
    }));
  };

  const handleRenameClick = (id) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          renaming: true, // Enable renaming mode
          newName: work.title, // Initialize newName with current title
        };
      }
      return work;
    }));
  };

  const handleRenameChange = (id, value) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          newName: value, // Update newName as user types
        };
      }
      return work;
    }));
  };

  const handleRenameSave = (id) => {
    setWorks(works.map((work) => {
      if (work.id === id) {
        return {
          ...work,
          title: work.newName, // Update title with newName
          renaming: false, // Disable renaming mode
        };
      }
      return work;
    }));
  };

  const handleSave = (id) => {
    const workToUpdate = works.find((work) => work.id === id);
    // Here you would implement saving logic for each work item
    console.log('Saving work:', workToUpdate);
  };

  // Filter works based on searchText
  const filteredWorks = works.filter((work) =>
    work.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div style={styles.addWorkButtonContainer}>
        {userRole === 'editor' && (
          <button style={styles.addWorkButton} onClick={handleAddWork}>
            +
          </button>
        )}
      </div>
      {filteredWorks.map((work) => (
        <div key={work.id} style={styles.container}>
          <div style={styles.header} onClick={() => toggleExpand(work.id)}>
            {work.renaming ? (
              <input
                type="text"
                value={work.newName}
                onChange={(e) => handleRenameChange(work.id, e.target.value)}
                onBlur={() => handleRenameSave(work.id)}
                autoFocus
              />
            ) : (
              <>
                <h2 style={styles.title}>{work.title}</h2>
                {userRole === 'editor' && (
                  <div style={styles.evaluateContainer}>
                    <label style={styles.evaluateLabel}>
                      Status
                      <input
                        type="checkbox"
                        checked={work.isChecked}
                        onChange={() => handleCheckboxChange(work.id)}
                        style={styles.checkbox}
                      />
                    </label>
                  </div>
                )}
              </>
            )}
          </div>
          {work.isExpanded && (
            <div style={styles.content}>
              {userRole === 'editor' ? (
                <>
                  <textarea
                    style={styles.description}
                    placeholder="Description"
                    value={work.description}
                    onChange={(e) => handleDescriptionChange(work.id, e.target.value)}
                  />
                  <button style={styles.evaluateButton} onClick={() => handleSave(work.id)}>
                    Save
                  </button>
                  {!work.renaming && (
                    <button style={styles.renameButton} onClick={() => handleRenameClick(work.id)}>
                      Rename
                    </button>
                  )}
                </>
              ) : (
                <p style={styles.description}>{work.description}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  addWorkButtonContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  addWorkButton: {
    padding: '20px',
    fontSize: '30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s',
    lineHeight: '0.5',
  },
  container: {
    border: '1px solid #000',
    padding: '20px',
    margin: '20px auto',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    width: '600px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
  evaluateContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  evaluateLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '5px',
    cursor: 'pointer',
  },
  renameButton: {
    padding: '10px 15px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  content: {
    marginTop: '20px',
  },
  evaluateButton: {
    padding: '10px 15px',
    marginBottom: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s',
  },
  description: {
    width: '95%',
    height: '100px',
    padding: '10px',
    margin: '10px 0',
  },
};

export default Works;
