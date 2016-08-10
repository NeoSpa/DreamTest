#pragma strict
var newCameraIndex : int;
var rollback : boolean;
private var currentCameraIndex : int;
private var mainCamera : GameObject;

function Start () {
	mainCamera = GameObject.FindGameObjectsWithTag('MainCamera')[0];
}

function OnCollisionEnter (other : Collision) {
	if (other.gameObject.CompareTag('Player')) {
		if (mainCamera.GetComponent(CameraController) && newCameraIndex) {
			Debug.Log('Changing camera to ' + newCameraIndex);
			currentCameraIndex = mainCamera.GetComponent(CameraController).positionIndex;
			mainCamera.GetComponent(CameraController).positionIndex = newCameraIndex;
		}
	}
}

function OnCollisionExit (other : Collision) {
	if (other.gameObject.CompareTag('Player') && rollback) {	
		if (mainCamera.GetComponent(CameraController) && newCameraIndex) {
			Debug.Log('Rollbacking camera to ' + currentCameraIndex);
			mainCamera.GetComponent(CameraController).positionIndex = currentCameraIndex;
		}
	}
}