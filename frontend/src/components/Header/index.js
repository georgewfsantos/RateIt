import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/rate_it.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <NavLink to="/dashboard" activeStyle={{ color: '#aaa' }}>
            DASHBOARD
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong> {profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
