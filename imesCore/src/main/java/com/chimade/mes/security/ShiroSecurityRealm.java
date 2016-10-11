package com.chimade.mes.security;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.stereotype.Component;
 
 

@Component
public class ShiroSecurityRealm extends AuthorizingRealm {

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
//		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
//		SysUser user = sysUserDao.getByProerties("email", token.getUsername());
//		if (user != null) {
//			return new SimpleAuthenticationInfo(user.getId(), user.getPassword(), getName());
//		} else {
			return null;
//		}
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
//		Long userId = (Long) principals.fromRealm(getName()).iterator().next();
//		SysUser user = sysUserDao.get(userId);
//		if (user != null) {
//			SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
//			for (Role role : user.getRoles()) {
//				info.addRole(role.getRoleKey());
//				info.addStringPermissions(role.getPermissions());
//			}
//			return info;
//		} else {
			return null;
//		}
	}

}
