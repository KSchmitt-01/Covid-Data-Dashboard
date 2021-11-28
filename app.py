from app import create_app
c_app = create_app()

if __name__ == '__main__':
    c_app.run(threaded=True)