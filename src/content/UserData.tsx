import React from 'react';
import { EuiText, EuiSplitPanel, EuiTextAlign, EuiButton, EuiAvatar } from '@elastic/eui';

interface UserDataProps {
    emailAddress: string;
    name: string;
    date: string;
    handleLogout: () => void;
    deleteUser: () => void;
    style: React.CSSProperties | undefined;
  }
  const UserData: React.FC<UserDataProps> = ({ emailAddress, name, date, handleLogout, deleteUser, style }) => {
    return (
      <EuiSplitPanel.Outer direction="column" style={style}>
      <EuiSplitPanel.Inner>
        <EuiAvatar name={name} style={{width: '150px', height: '150px', margin: '25px'}} size={'xl'}/>
        <EuiText>
          <p>Email: {emailAddress}</p>
          <p>Account creation date: {date}</p>
          <p>Name: {name}</p>
        </EuiText>
      </EuiSplitPanel.Inner>
      <EuiSplitPanel.Inner grow={false} color="subdued">
        <EuiTextAlign textAlign='center'>
          <EuiButton
              color='danger'
              isDisabled={false}
              fill
              onClick={deleteUser}
              style={{margin: '10px'}}
            >
              Delete account
            </EuiButton>
            <EuiButton
              isDisabled={false}
              fill
              onClick={handleLogout}
              style={{margin: '10px'}}
            >
              Logout
            </EuiButton>
        </EuiTextAlign> 
      </EuiSplitPanel.Inner>
    </EuiSplitPanel.Outer>
    );
  };

export default UserData;