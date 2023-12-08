from fastbook import *
def predict():
  path = Path()/'src/public'
  learn_inf = load_learner(path/'python/export.pkl')
  return learn_inf.predict(path/('images/uploads/'+sys.argv[1]))
print(predict())
