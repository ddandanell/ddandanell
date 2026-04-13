/**
 * Auth middleware — verificerer brugerens identitet
 *
 * TODO: Implementer med JWT eller session-baseret auth
 */
function authenticate(req, _res, next) {
  // Placeholder — tilføj rigtig auth-logik her
  req.user = { id: 1, role: 'user' };
  next();
}

/**
 * Authorization — tjekker brugerens rolle
 */
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Ingen adgang' });
    }
    next();
  };
}

module.exports = { authenticate, authorize };
