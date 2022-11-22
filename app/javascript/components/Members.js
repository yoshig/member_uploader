import React from "react"
import PropTypes from "prop-types"
import Papa from "papaparse"
import axios from "axios"

class Members extends React.Component {
  render () {
    const { csrf_token, members } = this.props;
    const changeHandler = (event) => {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token

          axios.post('/members_mass_upload', {
            members: results.data
          }).then((response) => {
            if (response.data.success) {
              alert('Upload Successful');
            } else {
              alert(response.data.message);
            }
          })
        },
      });
    }

    return (
      <React.Fragment>
        <h1 style={{
          fontFamily: 'sans-serif',
          padding: '10px 20px 0px 20px',
        }}>
          Members
        </h1>
        <div style={{
          padding: '10px 20px',
        }}>
          <input
            type="file"
            name="file"
            accept=".csv"
            style={{
              fontFamily: 'sans-serif',
              display: "inline-block",
              cursor: "pointer",
            }}
            onChange={changeHandler}
          />
        </div>
        <table style={{
          fontFamily: 'sans-serif',
          padding: '10px 20px',
        }}>
          <tr style={{
            backgroundColor: '#6f42c1',
            color: 'white',
          }}>
            <th style={{
              padding: '10px 20px',
            }}>Name</th>
            <th style={{
              padding: '10px 20px',
            }}>Email</th>
            <th style={{
              padding: '10px 20px',
            }}>Company Name</th>
            <th style={{
              padding: '10px 20px',
            }}>Company Title</th>
          </tr>
          {
            members.map((member) => {
              return (
                <tr key={member.email}>
                  <td style={{
                    padding: '10px 20px 10px 3px',
                  }}>{member.first_name} {member.last_name}</td>
                  <td style={{
                    padding: '10px 20px',
                  }}>{member.email}</td>
                  <td style={{
                    padding: '10px 20px',
                  }}>{member.company_name}</td>
                  <td style={{
                    padding: '10px 20px',
                  }}>{member.company_title}</td>
                </tr>
              )
            })
          }
        </table>
      </React.Fragment>
    );
  }
}

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.object
  ),
  csrf_token: PropTypes.string
};

export default Members;
