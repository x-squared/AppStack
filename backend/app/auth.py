from __future__ import annotations

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt

# AppStack currently ships as a placeholder base repository without
# user/permission persistence models. Keep token helpers available,
# and fail fast with a clear message when runtime auth resolution is requested.
SECRET_KEY = "tpl-app-dev-secret-key-change-in-production"
ALGORITHM = "HS256"

bearer_scheme = HTTPBearer()


def create_token(ext_id: str) -> str:
    return jwt.encode({"sub": ext_id}, SECRET_KEY, algorithm=ALGORITHM)


def decode_token_or_401(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)) -> str:
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        ext_id = payload.get("sub")
        if not isinstance(ext_id, str) or not ext_id.strip():
            raise ValueError()
        return ext_id
    except (JWTError, ValueError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
        )


def get_current_user(_: str = Depends(decode_token_or_401)):
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Auth user resolution is not configured in AppStack placeholder backend.",
    )


def require_permission(permission_key: str):
    _ = permission_key

    def _dependency(_: str = Depends(decode_token_or_401)):
        raise HTTPException(
            status_code=status.HTTP_501_NOT_IMPLEMENTED,
            detail="Permission checks are not configured in AppStack placeholder backend.",
        )

    return _dependency


def require_admin(_: str = Depends(decode_token_or_401)):
    raise HTTPException(
        status_code=status.HTTP_501_NOT_IMPLEMENTED,
        detail="Admin checks are not configured in AppStack placeholder backend.",
    )
