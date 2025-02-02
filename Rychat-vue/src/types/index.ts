// 用户类型
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  status?: 'online' | 'offline' | 'away'
}

// 登录请求类型
export interface LoginRequest {
  email: string
  password: string
  checkCode: string
}

// 注册请求类型
export interface RegisterRequest {
  username: string
  email: string
  password: string
}

// 登录响应类型
export interface AuthResponse {
  user: User
  token: string
}